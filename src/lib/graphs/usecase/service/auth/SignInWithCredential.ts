'use server'

import { request } from '@/lib/graphs/request'

interface SignInWithCredentialProps {
	email:    string
	password: string
}

export async function SignInWithCredential({
	email,
	password,
}: SignInWithCredentialProps) {
	const [res, err] = await request.SignInWithCredential({
		email,
		password,
	})
	if (err) {
		console.error('Service Layer, Error sign in with Credential:', err)
		return [null, err]
	}

	return [res, null]
}
