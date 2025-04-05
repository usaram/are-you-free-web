<script lang='ts'>
	import { stores } from '@/lib/stores'
	import { utils } from '@/lib/utils'
	import { signOut } from '@auth/sveltekit/client'

	utils.GenerateCalendar(0, stores.NowInJSTStore, stores.HolidaysStore, stores.DaysStore)
</script>

<h1>hoge</h1>
<button on:click={() => signOut()}>Sign out</button>
