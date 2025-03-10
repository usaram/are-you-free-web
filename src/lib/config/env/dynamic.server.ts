import { env } from '$env/dynamic/private'

export const dynamic = {
	googleClientId:     env.VITE_GOOGLE_CLIENT_ID,
	googleClientSecret: env.VITE_GOOGLE_CLIENT_SECRET,
}
