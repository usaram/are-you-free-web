import { providerMap, providers } from '@/auth'
import { cfg } from '@/lib/configs'
import { dynamic } from '@/lib/configs/env/dynamic.server'
import { SignInWithSocial } from '@/lib/graphs/requests/auth/SignInWithSocial'
import { GetNowInJst } from '@/lib/graphs/requests/date/GetNowInJst'
import { CalculateExpiresAt } from '@/lib/utils/expiration/CalculateExpiresAt'
import { SvelteKitAuth } from '@auth/sveltekit'

let username = ''

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers,
	secret:    dynamic.authSecret,
	trustHost: true,
	callbacks: {
		jwt: async ({ token, account }) => {
			for (const provider of providerMap) {
				if (account?.provider === provider.id) {
					const [payload, err] = await SignInWithSocial({
						username:              token.name,
						email:                 token.email,
						authProviderName:      account.provider,
						authProviderType:      account.type,
						authProviderAccountID: account.providerAccountId,
					})
					if (err) {
						return false
					}

					if (!account?.expires_at) {
						const [nowInJst, err] = await GetNowInJst()
						if (err) {
							return false
						}

						const expiresAt = CalculateExpiresAt(nowInJst, cfg.expirationDay)
						account.expires_at = expiresAt
					}

					token = {
						user: {
							id:   payload.token,
							name: payload.username,
						},
						exp: account.expires_at,
					}
				}
			}
			console.warn('22222222222222222222')
			console.warn('token', token)
			return token
		},
		session: async ({ token, session }) => {
			if (!token && !token.user) {
				return null
			}

			session = {
				user: {
					id:   token.user.id,
					name: token.user.name,
				},
				exp: token.exp,
			}
			username = token.user.name
			console.warn('111111111	1111111111')
			console.warn('session', session)
			console.warn('token', token)
			console.warn('username', username)
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
				url = `${baseUrl}/`
			}

			return url
		},
	},
	pages: {
		signIn:  '/signin', // `signIn()`(プロバイダ指定なし)の時に飛ぶ
		newUser: '/test', // 初ログインの時にリダイレクトする。,
		signOut: '/', // `signOut()`の時に飛ぶ
		error:   '/auth/error', // 認証中のエラー発生時にリダイレクト
	},
})
