import { types } from '@/lib/types'
import { goto } from '$app/navigation'
import { service } from '@/lib/graphs/usecase/service'
import { get } from 'svelte/store'

export async function SignUpWithCredential(SignUpFormStore: types.stores.SignUpFormStoreProps) {
	const [res, err] = await service.SignUpWithCredential({
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
