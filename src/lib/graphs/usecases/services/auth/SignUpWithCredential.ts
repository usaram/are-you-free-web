'use server'

import { SignUpWithCredential as reqSignUpWithCredential } from '@/lib/graphs/requests/auth/SignUpWithCredential'
// import { get } from 'svelte/store'

interface SignUpWithCredentialProps {
	// username:        Writable<string>
	// email:           Writable<string>
	// password:        Writable<string>
	// confirmPassword: Writable<string>
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
		// username:        get(username),
		// email:           get(email),
		// password:        get(password),
		// confirmPassword: get(confirmPassword),
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
