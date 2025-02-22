<script lang='ts'>
  import PrimaryButton from '@/lib/components/ui/buttons/PrimaryButton.svelte'
  import SecondaryButton from '@/lib/components/ui/buttons/SecondaryButton.svelte'
  import { onMount } from 'svelte'

  export let data: { clockIcon: string }
  let clockIcon: any

  console.log(data.clockIcon)

  onMount(async () => {
    clockIcon = (
      await import(`@/lib/components/ui/icons/clock/${data.clockIcon}.svelte`)
    ).default
  })
</script>

<div class='min-h-screen flex flex-col items-center justify-center p-4 bg-base'>
  <div class='text-center mb-8'>
    <h1 class='text-4xl font-bold text-sky-800 mb-2'>
      Are you free?
    </h1>
    <p class='text-sky-600'>Schedule your free time</p>
  </div>
  <svelte:component this={clockIcon} size={120} />
  <div class='flex justify-center items-center mt-6 space-x-2'>
    <PrimaryButton name='Sign In' height=full width=3xs/>
    <SecondaryButton name='Sign Up' height=full width=3xs />
  </div>
</div>
