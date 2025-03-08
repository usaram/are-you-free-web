<script lang='ts'>
	import { Clock8 } from 'lucide-svelte'
	import './Common.css'

	export let size: number = 24
</script>

<div class='clock-container'>
	<Clock8 {size} class='clock-icon' />
</div>
