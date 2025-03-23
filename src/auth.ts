import { env } from '@/lib/configs/env/private.server'
import Credentials from '@auth/core/providers/credentials'
import GitHub from '@auth/sveltekit/providers/github'
import Google from '@auth/sveltekit/providers/google'

export const providers = [
	// Credential SignIn
	Credentials({
		credentials: {
			username:        { label: 'Username', type: 'text' },
			email:		         { label: 'Email', type: 'email' },
			password:        { label: 'Password', type: 'password' },
			confirmPassword: { label: 'Confirm Password', type: 'password' },
		},
		authorize: async (credentials) => {
			const account = {
				provider: 'credentials',
			}
			const token = {
				name:            credentials.username,
				email:           credentials.email,
				password:        credentials.password,
				confirmPassword: credentials.confirmPassword,
			}
			return { account, token }
		},
	}),

	// Social SignIn
	Google({
		clientId:     env.googleClientId,
		clientSecret: env.googleClientSecret,
	}),
	GitHub({
		clientId:     env.githubClientId,
		clientSecret: env.githubClientSecret,
	}),
]

export const providerMap = providers.map((provider) => {
	if (typeof provider === 'function') {
		const providerData = provider()
		return { id: providerData.id, name: providerData.name }
	}

	return { id: provider.id, name: provider.name }
})
