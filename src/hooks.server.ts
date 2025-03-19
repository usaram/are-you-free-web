import { dynamic } from '@/lib/configs/env/dynamic.server'
import { SignInWithGoogle } from '@/lib/graphs/services/auth/SignInWithGoogle'
import Google from '@auth/core/providers/google'
import { SvelteKitAuth } from '@auth/sveltekit'

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
				const [res, err] = await SignInWithGoogle({
					username: token.username,
					email:    token.email,
				})
				if (err || !res) {
					return false
				}

				token = {
					user: {
						id:       res.token,
						nickname: res.nickname,
					},
					// exp: res.exp,
				}
				console.warn('token:', token)
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
					nickname: token.user.nickname,
				},
				exp: token.exp,
			}
			nickname = token.user.nickname
			return session
		},

		// redirect: async ({ url, baseUrl }) => {
		// 	if (url.includes('/signin')) {
		// 		console.warn('888888888888888888')
		// 		console.warn('nickname:', nickname)
		// 		url = `${baseUrl}/${nickname}`
		// 	}
		// 	if (url.includes('/signout')) {
		// 		console.warn('999999999999999999')
		// 		nickname = ''
		// 		url = `${baseUrl}/login`
		// 	}

		// 	return url
		// },
	},
	pages: {
		signIn: '/signin',
		// signOut: '/login',
		// newUser: '/user',
		error:  '/auth/error',
	},
})
