'use server'

import type { Session } from '@auth/core/types'
import { SignInWithGoogle as requestsSignInWithGoogle } from '@/lib/graphs/requests/auth/SignInWithGoogle'

export async function SignInWithGoogle({
	session,
}: Session) {
	const [res, err] = await requestsSignInWithGoogle({
		username: session.user.username,
		email:    session.user.id,
		exp:      session.user.exp,
	})
	if (err != null) {
		console.error('Error signing in with Google:', err)
		return [null, err]
	}

	session.user.id = res?.token
	return
}
