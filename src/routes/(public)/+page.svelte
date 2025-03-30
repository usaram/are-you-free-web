<script lang='ts'>
	import Layout from '@/routes/(public)/__layout.svelte'
	import { onMount } from 'svelte'

	export let data: {
		clockIcon: string
	}
	let clockIcon: any

	onMount(async () => {
		clockIcon = (
			await import(`@/lib/components/icon/clock/${data.clockIcon}.svelte`)
		).default
	})

	const isSignIn: boolean = false
	const isSignUp: boolean = false
</script>

<Layout {isSignIn} {isSignUp}>
	<div class='flex flex-col m-auto'>
		<div class='text-center mb-8'>
			<h1 class='text-6xl font-bold text-sky-800 mb-2'>
				Are you free?
			</h1>
			<p class='text-2xl text-sky-600 mt-5'>Schedule your free time</p>
		</div>

		<div class='flex w-full justify-center items-center mt-10'>
			<svelte:component this={clockIcon} size={160} />
		</div>
	</div>
</Layout>
