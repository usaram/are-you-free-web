import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const SignInFormStore: types.SignInFormStoreProps = {
	email:    writable(''),
	password: writable(''),
}
