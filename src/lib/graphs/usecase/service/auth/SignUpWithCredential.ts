'use server'

import { SignUpWithCredential as reqSignUpWithCredential } from '@/lib/graphs/request/auth/SignUpWithCredential'

interface SignUpWithCredentialProps {
	username:        string
	email:           string
	password:        string
	confirmPassword: string
}

export async function SignUpWithCredential({
	username,
	email,
	password,
	confirmPassword,
}: SignUpWithCredentialProps) {
	const [res, err] = await reqSignUpWithCredential({
		username,
		email,
		password,
		confirmPassword,
	})
	if (err) {
		console.error('Service Layer, Error sign up with Credential:', err)
		return [null, err]
	}

	return [res, null]
}
