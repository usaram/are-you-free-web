import { env } from '$env/dynamic/private'

export const dynamic = {
	authSecret:         env.VITE_AUTH_SECRET,
	googleClientId:     env.VITE_GOOGLE_CLIENT_ID,
	googleClientSecret: env.VITE_GOOGLE_CLIENT_SECRET,
}
