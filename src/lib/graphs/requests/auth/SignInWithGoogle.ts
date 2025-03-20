'use server'

import type {
	SignInWithGoogleInput,
	SignInWithGoogleMutation,
	SignInWithGooglePayload,
} from '@/lib/graphs/generated/types'
import type { err } from '@/lib/types/err'
import { client } from '@/lib/graphs'
import { mutation } from '@/lib/graphs/schema/mutation'

export async function SignInWithGoogle({
	username,
	email,
	exp,
}: SignInWithGoogleInput): Promise<[SignInWithGooglePayload | null, err]> {
	const args: { input: SignInWithGoogleInput } = {
		input: {
			username,
			email,
			exp,
		},
	}

	const { res, err } = await client.request<SignInWithGoogleMutation>({
		query:     mutation.SignInWithGoogle,
		variables: args,
	})
	if (err) {
		console.error('Request Layer, Error signing in with Google:', err)
		return [null, err]
	}

	return [res.payload, null]
}
