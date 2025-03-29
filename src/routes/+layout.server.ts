import type { Load } from '@sveltejs/kit'

import { expiration } from '@/lib/utils/expiration'
import { signOut } from '@auth/sveltekit/client'
import { redirect } from '@sveltejs/kit'

export const load: Load = async ({ locals }) => {
	const session = await locals.getSession()

	if (session && session.user) {
		if (!expiration.IsExpires(session.user.exp)) {
			throw redirect(302, `/${session.user.name}`)
		}

		signOut()
		redirect(302, '/')
	}
}
