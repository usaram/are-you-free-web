import type { types } from '@/lib/types'
import { goto } from '$app/navigation'
import { service } from '@/lib/graphs/usecase/service'
import { get } from 'svelte/store'

export async function SignInWithCredential(SignInFormStore: types.stores.SignInFormStoreProps) {
	const [res, err] = await service.SignInWithCredential({
		email:    get(SignInFormStore.email),
		password: get(SignInFormStore.password),
	})
	if (err) {
		console.error('Handle Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	goto(`/${res.username}`)
}
