import type { Actions } from './$types'
import { signOut } from '@/hooks.server'

export const actions: Actions = { default: signOut }
