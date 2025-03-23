import type { SignInFormStoreProps } from '@/lib/types/components/forms/SignInFormStoreProps'
import { goto } from '$app/navigation'
import { SignInWithCredential as srvSignInWithCredential } from '@/lib/graphs/usecases/services/auth/SignInWithCredential'
import { get } from 'svelte/store'

export async function SignInWithCredential(SignInFormStore: SignInFormStoreProps) {
	const [res, err] = await srvSignInWithCredential({
		email:    get(SignInFormStore.email),
		password: get(SignInFormStore.password),
	})
	if (err) {
		console.error('Handle Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	goto(`/${res.username}`)
}
