import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const SignInFormStore: types.stores.SignInFormStoreProps = {
	email:    writable(''),
	password: writable(''),
}
