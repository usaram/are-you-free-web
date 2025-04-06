import {
	AUTH_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
} from '$env/static/private'

export const env = {
	authSecret:         AUTH_SECRET,
	googleClientId:     GOOGLE_CLIENT_ID,
	googleClientSecret: GOOGLE_CLIENT_SECRET,
	githubClientId:     GITHUB_CLIENT_ID,
	githubClientSecret: GITHUB_CLIENT_SECRET,
}
