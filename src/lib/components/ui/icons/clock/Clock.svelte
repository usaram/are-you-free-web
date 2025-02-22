<script lang='ts'>
  import { Clock } from 'lucide-svelte'
  import './Common.css'

  export let size: number = 24
</script>

<div class='clock-container'>
  <Clock {size} class='clock-icon' />
</div>
