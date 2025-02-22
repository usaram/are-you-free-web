<script lang='ts'>
  const { children } = $props()
  import '../app.css'
</script>

{@render children()}

<style lang='postcss'>
  @reference "tailwindcss/theme";

  :global(html) {
    background-color: theme(--color-neutral-50);
  }
</style>
