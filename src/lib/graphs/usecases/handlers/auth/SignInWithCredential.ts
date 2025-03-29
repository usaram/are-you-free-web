import type { SignInFormStoreProps } from '@/lib/types/components/forms/SignInFormStoreProps'
import { goto } from '$app/navigation'
import { services } from '@/lib/graphs/usecases/services'
import { get } from 'svelte/store'

export async function SignInWithCredential(SignInFormStore: SignInFormStoreProps) {
	handlers
	const [res, err] = await services.SignInWithCredential({
		email:    get(SignInFormStore.email),
		password: get(SignInFormStore.password),
	})
	if (err) {
		console.error('Handle Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	goto(`/${res.username}`)
}
