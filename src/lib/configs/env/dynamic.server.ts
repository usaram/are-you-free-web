import { env } from '$env/dynamic/private'

export const dynamic = {
	envrironment:       env.VITE_ENVIRONMENT,
	authSecret:         env.VITE_AUTH_SECRET,
	googleClientId:     env.VITE_GOOGLE_CLIENT_ID,
	googleClientSecret: env.VITE_GOOGLE_CLIENT_SECRET,
	githubClientId:     env.VITE_GITHUB_CLIENT_ID,
	githubClientSecret: env.VITE_GITHUB_CLIENT_SECRET,
}
