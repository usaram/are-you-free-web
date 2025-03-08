<script lang='ts'>
	export let name: string = ''
	export let height: string = ''
	export let width: string = ''
	export let type: 'button' | 'submit' | 'reset' = 'button'
	export let onclick: ()=> void
</script>

<button
	{type}
	class='
		{height}
		{width}
		{type}
		text-base
		text-black
		border
		border-neutral-400
		bg-neutral-50
		hover:bg-neutral-200
		rounded-lg
		transition-all
		duration-300
	'
	on:click={onclick}
>
	{name}
</button>
