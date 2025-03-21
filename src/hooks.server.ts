import { dynamic } from '@/lib/configs/env/dynamic.server'
import { SignInWithGoogle } from '@/lib/graphs/requests/auth/SignInWithGoogle'
import Google from '@auth/core/providers/google'
import { SvelteKitAuth } from '@auth/sveltekit'

let username = ''

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [
		Google({
			clientId:     dynamic.googleClientId,
			clientSecret: dynamic.googleClientSecret,
		}),
	],
	secret:    dynamic.authSecret,
	trustHost: true,
	callbacks: {
		jwt: async ({ token, account }) => {
			if (account?.provider === 'google') {
				console.warn('99999999999999999999999')
				console.warn('Google account:', account)
				console.warn('Google token:', token)

				const [res, err] = await SignInWithGoogle({
					username: token.name,
					email:    token.email,
				})
				if (err || !res) {
					return false
				}

				token = {
					user: {
						id:       res.token,
						username: res.username,
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
