import type { Writable } from 'svelte/store'

export interface SignUpFormStoreProps {
	username:        Writable<string>
	email:           Writable<string>
	password:        Writable<string>
	confirmPassword: Writable<string>
}
