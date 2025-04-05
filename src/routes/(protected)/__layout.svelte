<script lang='ts'>
	import Layout from '@/routes/__layout.svelte'
</script>

<Layout>
	<!-- Header Section -->
	<div slot='header' class='h-[10%] flex flex-none'>
	</div>

	<!-- Main Section -->
	<div slot='main' class='h-[85%] flex flex-grow relative '>
		<slot />
	</div>

	<!-- Footer Section -->
	<div slot='footer' class='h-[5%] flex flex-none bg-blue-500'></div>
</Layout>
