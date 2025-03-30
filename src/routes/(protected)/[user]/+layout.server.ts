import type { Load } from '@sveltejs/kit'

import { stores } from '@/lib/stores'
import { expiration } from '@/lib/utils/expiration'
import { redirect } from '@sveltejs/kit'

export const load: Load = async ({ locals }) => {
	const session = await locals.getSession()

	if (session && session.user) {
		if (expiration.IsExpires(session.exp, stores.NowInJSTStore)) {
			throw redirect(302, `/signin`)
		}
	}
}
