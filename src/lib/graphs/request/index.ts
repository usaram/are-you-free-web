import { SignInWithCredential } from '@/lib/graphs/request/auth/SignInWithCredential'
import { SignInWithSocial } from '@/lib/graphs/request/auth/SignInWithSocial'
import { SignUpWithCredential } from '@/lib/graphs/request/auth/SignUpWithCredential'
import { GetHolidays } from '@/lib/graphs/request/date/GetHolidays'
import { GetNowInJst } from '@/lib/graphs/request/date/GetNowInJst'
import { HealthCheckForBackend } from '@/lib/graphs/request/HealthCheckForBackend'

export const request = {
	HealthCheckForBackend,

	// auth
	SignUpWithCredential,
	SignInWithCredential,
	SignInWithSocial,

	// date
	GetNowInJst,
	GetHolidays,
}
