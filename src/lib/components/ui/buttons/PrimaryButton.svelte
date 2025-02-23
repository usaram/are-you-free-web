<!-- filepath: /home/masaru/work/app/are-you-free/are-you-free-web/src/lib/components/ui/buttons/PrimaryButton.svelte -->
<script lang="ts">
  export let name: string = '';
  export let height: string = '';
  export let width: string = '';
  export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button
  {type}
  class="
    h-{height}
    w-{width}
	bg-sky-800
		text-[#fafafa]
		hover:bg-sky-600
		rounded-lg
		p-3
	"
  on:click
>
  {name}
</button>
