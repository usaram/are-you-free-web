import type { JWT as DefaultJWT, DefaultSession } from '@auth/core/types'

declare module '@auth/core/types' {
	interface User {
		id:       string
		username: string
	}
	interface Session extends DefaultSession {
		user: {
			id:       string
			username: string
		} & DefaultSession['user']
		exp: number
	}

	interface JWT extends DefaultJWT {
		user: {
			id:       string
			username: string
		}
		exp: number
	}
}
