import { providers } from '@/auth'
import { configs } from '@/lib/configs'
import { env } from '@/lib/configs/env/private.server'
import { request } from '@/lib/graphs/request'
import { stores } from '@/lib/stores'
import { utils } from '@/lib/utils'
import { SvelteKitAuth } from '@auth/sveltekit'

let username = ''

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers,
	secret:    env.authSecret,
	trustHost: true,
	callbacks: {
		jwt: async ({ token, account }) => {
			const [nowInJst, err] = await request.GetNowInJst()
			if (err) {
				return false
			}

			// 現在時刻（JST）をDateオブジェクトに変換し、ストアに保存
			const now = new Date(nowInJst)
			stores.NowInJSTStore.set(now)

			if (account?.provider === 'credentials') {
				const [payload, err] = await request.SignInWithCredential({
					username:         token.name,
					email:            token.email,
					password:         token.password,
					authProviderName: account.provider,
				})
				if (err) {
					return false
				}

				const expiresAt = utils.CalculateExpiresAt(nowInJst, configs.expirationDay)

				token = {
					user: {
						id:   payload.token,
						name: payload.username,
					},
					exp: expiresAt,
				}
			}

			if (account?.provider === 'google' || account?.provider === 'github') {
				let [payload, err] = await request.SignInWithSocial({
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
					const expiresAt = utils.CalculateExpiresAt(nowInJst, configs.expirationDay)
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
