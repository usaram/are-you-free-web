import { SignInWithCredential } from '@/lib/graphs/requests/auth/SignInWithCredential'
import { SignInWithSocial } from '@/lib/graphs/requests/auth/SignInWithSocial'
import { SignUpWithCredential } from '@/lib/graphs/requests/auth/SignUpWithCredential'
import { HealthCheckForBackend } from '@/lib/graphs/requests/HealthCheckForBackend'

export const requests = {
	HealthCheckForBackend,

	// auth
	SignUpWithCredential,
	SignInWithCredential,
	SignInWithSocial,
}
