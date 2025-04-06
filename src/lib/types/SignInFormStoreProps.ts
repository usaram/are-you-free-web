import type { Writable } from 'svelte/store'

export interface SignInFormStoreProps {
	email:    Writable<string>
	password: Writable<string>
}
