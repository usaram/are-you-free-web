<script lang='ts'>
  import { Clock4 } from 'lucide-svelte'
  import './Common.css'

  export let size: number = 24
</script>

<div class='clock-container'>
  <Clock4 {size} class='clock-icon' />
</div>
