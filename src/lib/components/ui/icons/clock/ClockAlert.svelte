<script lang='ts'>
	import { ClockAlert } from 'lucide-svelte'
	import './Common.css'

	export let size: number = 24
</script>

<div class='clock-container'>
	<ClockAlert {size} class='clock-icon' />
</div>
