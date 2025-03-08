<script lang="ts">
	import Layout from "@/routes/__layout.svelte";
	import Header from "@/lib/components/ui/layouts/header.svelte";

	let isSignIn: boolean = false
	let isSignUp: boolean = false
</script>

<Layout>
	<!-- Header Section -->
	<div slot="header" class="flex flex-none h-[10%]">
		<Header {isSignIn} {isSignUp} />
	</div>

	<!-- Main Section -->
	<div slot="main" class="flex flex-grow h-[85%] relative ">
		<div class="flex w-[20%]"></div>
		<div class="flex w-[60%]">
			<slot/>
		</div>
		<div class="flex w-[20%]"></div>
	</div>

	<!-- Footer Section -->
	<div slot="footer" class="flex flex-none h-[5%] bg-blue-500"></div>
</Layout>
