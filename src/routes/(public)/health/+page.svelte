<script>
	import { HealthCheckForBackend } from '@/lib/graphs/requests/HealthCheckForBackend'
</script>

<div>
	<button on:click={HealthCheckForBackend}>Check</button>
</div>
