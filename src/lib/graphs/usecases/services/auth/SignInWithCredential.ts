'use server'

import { requests } from '@/lib/graphs/requests'

interface SignInWithCredentialProps {
	email:    string
	password: string
}

export async function SignInWithCredential({
	email,
	password,
}: SignInWithCredentialProps) {
	const [res, err] = await requests.SignInWithCredential({
		email,
		password,
	})
	if (err) {
		console.error('Service Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	return [res, null]
}
