'use server'

import type {
	MutationSignInWithSocialArgs,
	SignInPayload,
	SignInWithSocialInput,
	SignInWithSocialMutation,
} from '@/lib/graphs/generated/types'
import { client } from '@/lib/graphs'
import { mutation } from '@/lib/graphs/schema/mutation'
import type { err } from '@/lib/types'

export async function SignInWithSocial({
	username,
	email,
	authProviderName,
	authProviderType,
	authProviderAccountID,
}: SignInWithSocialInput): Promise<[SignInPayload, err]> {
	const args: MutationSignInWithSocialArgs = {
		input: {
			username,
			email,
			authProviderName,
			authProviderType,
			authProviderAccountID,
		},
	}

	const { res, err } = await client.request<SignInWithSocialMutation>({
		query:     mutation.SignInWithSocial,
		variables: args,
	})
	if (err) {
		console.error('Request Layer, Error sign in with Social:', err)
		return [null, err]
	}

	return [res.payload, null]
}
