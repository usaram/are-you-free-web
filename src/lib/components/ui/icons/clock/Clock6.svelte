<script lang='ts'>
	import { Clock6 } from 'lucide-svelte'
	import './Common.css'

	export let size: number = 24
</script>

<div class='clock-container'>
	<Clock6 {size} class='clock-icon' />
</div>
