'use server'

import type { MutationSignInWithCredentialArgs, SignInPayload, SignInWithCredentialInput, SignInWithCredentialMutation } from '@/lib/graphs/generated/types'
import type { err } from '@/lib/types/err'
import { client } from '@/lib/graphs'
import { mutation } from '@/lib/graphs/schema/mutation'

export async function SignInWithCredential({
	email,
	password,
}: SignInWithCredentialInput): Promise<[SignInPayload, err]> {
	const args: MutationSignInWithCredentialArgs = {
		input: {
			email,
			password,
		},
	}

	const { res, err } = await client.request<SignInWithCredentialMutation>({
		query:     mutation.SignInWithCredential,
		variables: args,
	})
	if (err) {
		console.error('Request Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	return [res.payload, null]
}
