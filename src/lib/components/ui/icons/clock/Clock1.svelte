<script lang='ts'>
  import { Clock1 } from 'lucide-svelte'
  import './Common.css'

  export let size: number = 24
</script>

<div class='clock-container'>
  <Clock1 {size} class='clock-icon' />
</div>
