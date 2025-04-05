import type { Session } from '@auth/core/types'
import { components } from '@/lib/types/components'
import { stores } from '@/lib/types/stores'

export type err = string | null

export interface session {
	session: Session
}

export const types = {
	components,
	stores,
}
