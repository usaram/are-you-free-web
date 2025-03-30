import type { Actions } from './$types'
import { signIn } from '@/hooks.server'

export const actions: Actions = {
	default: signIn,
}
