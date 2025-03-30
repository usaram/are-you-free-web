<script lang='ts'>
	import { signOut } from '@auth/sveltekit/client'
</script>

<h1>hoge</h1>
<button on:click={() => signOut()}>Sign out</button>
