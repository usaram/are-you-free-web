import type { SignUpFormStoreProps } from '@/lib/types/SignUpFormStoreProps'
import { writable } from 'svelte/store'

export const SignUpFormStore: SignUpFormStoreProps = {
	username:        writable(''),
	email:           writable(''),
	password:        writable(''),
	confirmPassword: writable(''),
}
