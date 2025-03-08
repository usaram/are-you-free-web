<script lang='ts'>
	import SignUp from '@/lib/components/ui/forms/SignUp.svelte'
	import Layout from '@/routes/(public)/__layout.svelte'

	const isSignUp: boolean = true
</script>

<Layout {isSignUp}>
	<SignUp />
</Layout>
