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
}: SignInWithGoogleInput): Promise<[SignInWithGooglePayload | null, err]> {
	const args: { input: SignInWithGoogleInput } = {
		input: {
			username,
			email,
		},
	}

	const { data, err } = await client.request<SignInWithGoogleMutation>({
		query:     mutation.SignInWithGoogle,
		variables: args,
	})
	if (err) {
		return [null, err]
	}

	return [data.payload, null]
}
