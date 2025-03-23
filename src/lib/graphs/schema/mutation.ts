import { SignInWithCredential } from '@/lib/graphs/schema/auth/SignInWithCredential'
import { SignInWithSocial } from '@/lib/graphs/schema/auth/SignInWithSocial'
import { SignUpWithCredential } from '@/lib/graphs/schema/auth/SignUpWithCredential'

export const mutation = {
	// SignUp
	SignUpWithCredential,

	// SignIn
	SignInWithCredential,
	SignInWithSocial,
}
