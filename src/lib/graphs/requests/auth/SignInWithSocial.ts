'use server'

import type {
	SignInWithSocialInput,
	SignInWithSocialMutation,
	SignInWithSocialPayload,
} from '@/lib/graphs/generated/types'
import type { err } from '@/lib/types/err'
import { client } from '@/lib/graphs'
import { mutation } from '@/lib/graphs/schema/mutation'

export async function SignInWithSocial({
	username,
	email,
	authProviderName,
	authProviderType,
	authProviderAccountID,
}: SignInWithSocialInput): Promise<[SignInWithSocialPayload | null, err]> {
	const args: { input: SignInWithSocialInput } = {
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
		console.error('Request Layer, Error signing in with Social:', err)
		return [null, err]
	}

	return [res.payload, null]
}
