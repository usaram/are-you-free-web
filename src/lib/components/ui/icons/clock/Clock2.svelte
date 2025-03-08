<script lang='ts'>
	import { Clock2 } from 'lucide-svelte'
	import './Common.css'

	export let size: number = 24
</script>

<div class='clock-container'>
	<Clock2 {size} class='clock-icon' />
</div>
