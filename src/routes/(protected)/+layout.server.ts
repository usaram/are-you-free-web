import type { Load } from '@sveltejs/kit'

import { request } from '@/lib/graphs/request'
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

	const [nowInJST, err] = await request.GetNowInJst()
	if (err) {
		console.error('Error fetching current time in JST:', err)
		return {
			session,
			nowInJST: null,
			err,
		}
	}

	return {
		session,
		nowInJST,
		err: null,
	}
}
