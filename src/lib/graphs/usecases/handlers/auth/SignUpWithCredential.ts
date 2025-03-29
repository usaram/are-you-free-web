import type { SignUpFormStoreProps } from '@/lib/types/components/forms/SignUpFormStoreProps'
import { goto } from '$app/navigation'
import { services } from '@/lib/graphs/usecases/services'
import { get } from 'svelte/store'

export async function SignUpWithCredential(SignUpFormStore: SignUpFormStoreProps) {
	const [res, err] = await services.SignUpWithCredential({
		username:        get(SignUpFormStore.username),
		email:           get(SignUpFormStore.email),
		password:        get(SignUpFormStore.password),
		confirmPassword: get(SignUpFormStore.confirmPassword),
	})
	if (err || !res) {
		console.error('Handle Layer, Error sign up with Credential:', err)
		return [null, err]
	}

	goto('/signin')
}
