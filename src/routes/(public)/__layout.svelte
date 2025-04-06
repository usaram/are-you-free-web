<script lang='ts'>
	import Header from '@/lib/components/layout/public/Header.svelte';
	import Layout from '@/routes/__layout.svelte'

	export let isSignIn: boolean = false
	export let isSignUp: boolean = false
</script>

<Layout>
	<!-- Header Section -->
	<div slot='header' class='h-[10%] flex flex-none'>
		<Header {isSignIn} {isSignUp} />
	</div>

	<!-- Main Section -->
	<div slot='main' class='h-[85%] flex flex-grow relative '>
		<div class='w-[20%] flex'></div>
		<div class='w-[60%] flex'>
			<slot />
		</div>
		<div class='w-[20%] flex'></div>
	</div>

	<!-- Footer Section -->
	<div slot='footer' class='h-[5%] flex flex-none bg-blue-500'></div>
</Layout>
