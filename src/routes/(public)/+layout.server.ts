import type { Load } from '@sveltejs/kit'

import { redirect } from '@sveltejs/kit'

export const load: Load = async ({ locals }) => {
	const session = await locals.getSession()

	if (session && session.user) {
		throw redirect(302, `/${session.user.name}`)
	}
}
