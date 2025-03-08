<script lang='ts'>
	import SignIn from '@/lib/components/ui/forms/SignIn.svelte'
	import Layout from '@/routes/(public)/__layout.svelte'

	const isSignIn: boolean = true
</script>

<Layout {isSignIn}>
	<SignIn />
</Layout>
