import type { SignInFormStoreProps } from '@/lib/types/components/forms/SignInFormStoreProps'
import { writable } from 'svelte/store'

export const SignInFormStore: SignInFormStoreProps = {
	email:    writable(''),
	password: writable(''),
}
