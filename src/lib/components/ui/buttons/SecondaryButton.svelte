<script lang='ts'>
  export let name: string = ''
  export let height: string = ''
  export let width: string = ''
  export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button
  {type}
  class='
		h-{height}
		w-{width}
		bg-neutral-50
		text-black
		hover:bg-neutral-200
		border
		border-neutral-400
		rounded-lg
		p-3
	'
  on:click
>
  {name}
</button>
