import { providerMap, providers } from '@/auth'
import { cfg } from '@/lib/configs'
import { dynamic } from '@/lib/configs/env/dynamic.server'
import { SignInWithSocial } from '@/lib/graphs/requests/auth/SignInWithSocial'
import { GetNowInJst } from '@/lib/graphs/requests/date/GetNowInJst'
import { CalculateExpiresAt } from '@/lib/utils/SetExpirationForToken'
import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from '@auth/sveltekit/providers/github'
import Google from '@auth/sveltekit/providers/google'

let username = ''

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers,
	// providers: [
	// 	Google({
	// 		clientId:     dynamic.googleClientId,
	// 		clientSecret: dynamic.googleClientSecret,
	// 	}),
	// 	GitHub({
	// 		clientId:     dynamic.githubClientId,
	// 		clientSecret: dynamic.githubClientSecret,
	// 	}),
	// ],
	secret:    dynamic.authSecret,
	trustHost: true,
	callbacks: {
		jwt: async ({ token, account }) => {
			console.warn('1111111111111111111')
			console.warn(account)
			for (const provider of providerMap) {
				console.warn('2222222222222222222')
				console.warn('account', account)
				console.warn('token', token)
				if (account?.provider === provider.id) {
					console.warn('333333333333333')
					const [res, err] = await SignInWithSocial({
						username:              token.name,
						email:                 token.email,
						authProviderName:      account.provider,
						authProviderType:      account.type,
						authProviderAccountID: account.providerAccountId,
					})
					if (err) {
						return false
					}

					console.warn('555555555555555555555')
					console.warn(account.expres_at)
					if (!account?.expires_at) {
						const [nowInJst, err] = await GetNowInJst()
						if (err) {
							return false
						}

						const expiresAt = CalculateExpiresAt(nowInJst, cfg.expirationDay)
						account.expires_at = expiresAt

						console.warn('expiresAt', expiresAt)
					}

					token = {
						user: {
							id:       res.token,
							username: res.username,
						},
						exp: account.expires_at,
					}
				}
			}
			return token

			// let [nowInJst, err] = await GetNowInJst()
			// if (err) {
			// 	return false
			// }

			// console.warn('res', res)

			// const expiresAt = CalculateExpiresAt(nowInJst, cfg.expirationDay)

			// console.warn('expiresAt', expiresAt)
		},
		session: async ({ token, session }) => {
			if (!token && !token.user) {
				return null
			}

			session = {
				user: {
					id:       token.user.id,
					username: token.user.username,
				},
				exp: token.exp,
			}
			username = token.user.username
			return session
		},

		redirect: async ({ url, baseUrl }) => {
			if (url.includes('/signin')) {
				console.warn('888888888888888888')
				console.warn('username', username)
				url = `${baseUrl}/${username}`
			}
			if (url.includes('/signout')) {
				username = ''
				url = `${baseUrl}/login`
			}

			return url
		},
	},
	pages: {
		signIn:  '/signin', // `signIn()`(プロバイダ指定なし)の時に飛ぶ
		newUser: '/test', // 初ログインの時にリダイレクトする。,
		signOut: '/auth/signout', // `signOut()`の時に飛ぶ
		error:   '/auth/error', // 認証中のエラー発生時にリダイレクト
	},
})
