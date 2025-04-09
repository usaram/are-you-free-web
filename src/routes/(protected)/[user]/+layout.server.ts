import type { Load } from '@sveltejs/kit'

import { stores } from '@/lib/stores'
import { utils } from '@/lib/utils'
import { redirect } from '@sveltejs/kit'

export const load: Load = async ({ locals }) => {
	const session = await locals.getSession()

	if (session && session.user) {
		if (utils.IsExpiresAt(session.exp, stores.NowInJSTStore)) {
			throw redirect(302, `/signin`)
		}
	}
}
