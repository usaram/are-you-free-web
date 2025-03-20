<!-- filepath: /home/masaru/work/app/are-you-free/are-you-free-web/src/lib/components/ui/buttons/PrimaryButton.svelte -->
<script lang='ts'>
	export let icon: any
	export let iconColor: string = ''
	export let height: string = ''
	export let width: string = ''
	export let bg: string = ''
	export let hover: string = ''
	export let border: string = ''
	export let borderColor: string = ''
	export let type: 'button' | 'submit' | 'reset' = 'button'
	export let onclick: (e: MouseEvent)=> void
</script>

<button
	{type}
	class='
		{height}
		{width}
		flex
		items-center
		justify-center
		{bg}
		{hover}
		{border}
		{borderColor}
		rounded-lg
		transition-all
		duration-300
		relative
	'
	on:click={onclick}
>
	<div class='relative z-10 {iconColor}'>
		<svelte:component this={icon} />
	</div>
</button>
