<script lang='ts'>
	import { Clock5 } from 'lucide-svelte'
	import './Common.css'

	export let size: number = 24
</script>

<div class='clock-container'>
	<Clock5 {size} class='clock-icon' />
</div>
