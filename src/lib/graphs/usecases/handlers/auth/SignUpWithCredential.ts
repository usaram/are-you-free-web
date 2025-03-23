import type { SignUpFormStoreProps } from '@/lib/types/components/forms/SignUpFormStoreProps'
import { goto } from '$app/navigation'
import { SignUpWithCredential as srvSignUpWithCredential } from '@/lib/graphs/usecases/services/auth/SignUpWithCredential'
import { SignUpFormStore } from '@/lib/stores/components/forms/SignUpFormStore'
import { get } from 'svelte/store'

export async function SignUpWithCredential(SignUpFormStore: SignUpFormStoreProps) {
	const [res, err] = await srvSignUpWithCredential({
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
