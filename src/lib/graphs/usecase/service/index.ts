import { SignInWithCredential } from '@/lib/graphs/usecase/service/auth/SignInWithCredential'
import { SignUpWithCredential } from '@/lib/graphs/usecase/service/auth/SignUpWithCredential'

export const service = {
	// auth
	SignUpWithCredential,
	SignInWithCredential,
}
