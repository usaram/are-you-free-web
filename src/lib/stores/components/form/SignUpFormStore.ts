import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const SignUpFormStore: types.stores.SignUpFormStoreProps = {
	username:        writable(''),
	email:           writable(''),
	password:        writable(''),
	confirmPassword: writable(''),
}
