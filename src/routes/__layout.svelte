<script lang='ts'>
	import '@/app.css'
</script>

<div class='min-h-screen h-screen w-full flex flex-col bg-neutral-50'>
	<slot name='header'></slot>
	<slot name='main'></slot>
	<slot name='footer'></slot>
</div>
