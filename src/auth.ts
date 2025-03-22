import { dynamic } from '@/lib/configs/env/dynamic.server'
import GitHub from '@auth/sveltekit/providers/github'
import Google from '@auth/sveltekit/providers/google'

export const providers = [
	Google({
		clientId:     dynamic.googleClientId,
		clientSecret: dynamic.googleClientSecret,
	}),
	GitHub({
		clientId:     dynamic.githubClientId,
		clientSecret: dynamic.githubClientSecret,
	}),
]

export const providerMap = providers.map((provider) => {
	if (typeof provider === 'function') {
		const providerData = provider()
		return { id: providerData.id, name: providerData.name }
	}

	return { id: provider.id, name: provider.name }
})
