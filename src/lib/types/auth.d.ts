import type { JWT as DefaultJWT, DefaultSession } from '@auth/core/types'

declare module '@auth/core/types' {
	interface User {
		id:   string
		name: string
	}
	interface Session extends DefaultSession {
		user: {
			id:   string
			name: string
		} & DefaultSession['user']
		exp: number
	}

	interface JWT extends DefaultJWT {
		user: {
			id:   string
			name: string
		}
		exp: number
	}
}
