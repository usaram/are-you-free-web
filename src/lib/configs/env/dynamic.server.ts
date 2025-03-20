import { env } from '$env/dynamic/private'

export const dynamic = {
	envrironment:       env.VITE_ENVIRONMENT,
	authSecret:         env.VITE_AUTH_SECRET,
	googleClientId:     env.VITE_GOOGLE_CLIENT_ID,
	googleClientSecret: env.VITE_GOOGLE_CLIENT_SECRET,
	googleRedirectUri:  env.VITE_GOOGLE_REDIRECT_URI,
}
