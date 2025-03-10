// import { env_private } from '@/lib/constants/envs.server'
// import { LoginWithGoogle } from '@/lib/graphs/apis/auth/LoginWithGoogle'

// let nickname = ''

// export const { handle, signIn, signOut } = SvelteKitAuth({
// 	providers: [
// 		Google({
// 			clientId:     env_private.googleClientId,
// 			clientSecret: env_private.googleClientSecret,
// 		}),
// 	],
// 	secret:    env_private.authSecret,
// 	trustHost: true,
// 	callbacks: {
// 		jwt: async ({ token, account }) => {
// 			if (account?.provider === 'google') {
// 				const [res, err] = await LoginWithGoogle({
// 					nickname: token.name,
// 					email:    token.email,
// 				})
// 				if (err || !res) {
// 					return false
// 				}

// 				token = {
// 					user: {
// 						id:       res.token,
// 						nickname: res.nickname,
// 					},
// 					exp: res.exp,
// 				}
// 			}
// 			return token
// 		},
// 		session: async ({ token, session }) => {
// 			if (!token && !token.user) {
// 				return null
// 			}

// 			session = {
// 				user: {
// 					id:       token.user.id,
// 					nickname: token.user.nickname,
// 				},
// 				exp: token.exp,
// 			}
// 			nickname = token.user.nickname
// 			return session
// 		},

// 		redirect: async ({ url, baseUrl }) => {
// 			if (url.includes('/signin')) {
// 				console.warn('888888888888888888')
// 				console.warn('nickname:', nickname)
// 				url = `${baseUrl}/${nickname}`
// 			}
// 			if (url.includes('/signout')) {
// 				console.warn('999999999999999999')
// 				nickname = ''
// 				url = `${baseUrl}/login`
// 			}

// 			return url
// 		},
// 	},
// 	pages: {
// 		// signIn: '/signup',
// 		// signOut: '/login',
// 		// newUser: '/user',
// 		error: '/auth/error',
// 	},
// })

// // const loginWithGoogle = async (token, account) => {
// // 	const [res, err] = await LoginWithGoogle({
// // 		nickname: token.name,
// // 		email: token.email,
// // 		exp: account?.expires_at,
// // 	})
// // 	if (err) {
// // 		console.error(err)
// // 		return false
// // 	}
// // 	if (res.ok) {
// // 		return res.json()
// // 	} else {
// // 		return null
// // 	}
// // }
