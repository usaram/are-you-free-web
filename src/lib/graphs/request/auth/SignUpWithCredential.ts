'use server'

import type { MutationSignUpWithCredentialArgs, SignUpPayload, SignUpWithCredentialInput, SignUpWithCredentialMutation } from '@/lib/graphs/generated/types'
import type { err } from '@/lib/types/err'
import { client } from '@/lib/graphs'
import { mutation } from '@/lib/graphs/schema/mutation'

export async function SignUpWithCredential({
	username,
	email,
	password,
	confirmPassword,
}: SignUpWithCredentialInput): Promise<[SignUpPayload, err]> {
	const args: MutationSignUpWithCredentialArgs = {
		input: {
			username,
			email,
			password,
			confirmPassword,
		},
	}

	const { res, err } = await client.request<SignUpWithCredentialMutation>({
		query:     mutation.SignUpWithCredential,
		variables: args,
	})
	if (err) {
		console.error('Request Layer, Error sign up with credential:', err)
		return [null, err]
	}

	return [res.payload, null]
}
