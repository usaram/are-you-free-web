import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

interface SignUpFormStoreProps {
	username:        Writable<string>
	email:           Writable<string>
	password:        Writable<string>
	confirmPassword: Writable<string>
}

export const SignUpFormStore: SignUpFormStoreProps = {
	username:        writable(''),
	email:           writable(''),
	password:        writable(''),
	confirmPassword: writable(''),
}
