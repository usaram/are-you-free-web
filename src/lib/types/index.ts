import type { Session } from '@auth/core/types'

export interface err {
	Error: ()=> string | null
}

export interface session {
	session: Session
}
