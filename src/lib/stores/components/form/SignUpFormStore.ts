import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const SignUpFormStore: types.SignUpFormStoreProps = {
	username:        writable(''),
	email:           writable(''),
	password:        writable(''),
	confirmPassword: writable(''),
}
