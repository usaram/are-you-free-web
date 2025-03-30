import type { Load } from '@sveltejs/kit'

import { stores } from '@/lib/stores'
import { expiration } from '@/lib/utils/expiration'
import { signOut } from '@auth/sveltekit/client'
import { redirect } from '@sveltejs/kit'
import { get } from 'svelte/store'

export const load: Load = async ({ locals }) => {
	const session = await locals.getSession()

	if (session && session.user) {
		throw redirect(302, `/${session.user.name}`)
	}
}
