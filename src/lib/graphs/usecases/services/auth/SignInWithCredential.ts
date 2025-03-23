'use server'

import { SignInWithCredential as reqSignInWithCredential } from '@/lib/graphs/requests/auth/SignInWithCredential'

interface SignInWithCredentialProps {
	email:           string
	password:        string
}

export async function SignInWithCredential({
	email,
	password,
}: SignInWithCredentialProps) {
	const [res, err] = await reqSignInWithCredential({
		email,
		password,
	})
	if (err) {
		console.error('Service Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	return [res, null]
}
