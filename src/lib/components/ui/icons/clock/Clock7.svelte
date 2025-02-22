<script lang='ts'>
  import { Clock7 } from 'lucide-svelte'
  import './Common.css'

  export let size: number = 24
</script>

<div class='clock-container'>
  <Clock7 {size} class='clock-icon' />
</div>
