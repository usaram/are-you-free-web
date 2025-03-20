import { dynamic } from '@/lib/configs/env/dynamic.server'
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
	// callbacks: {
	// 	session: async ({ session, user }) => {
	// 		// idとかをSessionに含める場合
	// 		if (session.user) {
	// 			session.user.id = user.id
	// 			// session.user.role="admin"
	// 		}
	// 		return session
	// 	},
	// },
	pages:     {
		signIn:  '/signin', // `signIn()`(プロバイダ指定なし)の時に飛ぶ
		newUser: '/test', // 初ログインの時にリダイレクトする。,
		error:   '/auth/error', // 認証中のエラー発生時にリダイレクト
	},
})
