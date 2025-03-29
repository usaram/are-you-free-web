<script lang='ts'>
	import { Clock3 } from 'lucide-svelte'
	import './Common.css'

	export let size: number = 24
</script>

<div class='clock-container'>
	<Clock3 {size} class='clock-icon' />
</div>
