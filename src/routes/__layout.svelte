<script lang='ts'>
	import '@/app.css'
</script>

<div class='min-h-screen h-screen w-full flex flex-col'>
	<slot name='header'></slot>
	<slot name='main'></slot>
	<slot name='footer'></slot>
</div>
