import type { SignInFormStoreProps } from '@/lib/types/components/form/SignInFormStoreProps'
import type { SignUpFormStoreProps } from '@/lib/types/components/form/SignUpFormStoreProps'
import type { NowInJSTStoreProps } from '@/lib/types/graphs/date/NowInJSTStoreProps'
import type { Session } from '@auth/core/types'

export interface err {
	Error: ()=> string | null
}

export interface session {
	session: Session
}

export const types = {
	// components
	// * form
	SignInFormStoreProps,
	SignUpFormStoreProps,

	// graphs
	// * date
	NowInJSTStoreProps,
}
