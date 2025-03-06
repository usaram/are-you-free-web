<script lang='ts'>
	import { goto } from '$app/navigation';
  import PrimaryButton from '@/lib/components/ui/buttons/PrimaryButton.svelte'
  import SecondaryButton from '@/lib/components/ui/buttons/SecondaryButton.svelte'
  import { onMount } from 'svelte'

	export function handleAuth(mode: 'signin' | 'signup') {
		console.log('mode')
		console.log('mode', mode)
		goto(`/auth?mode=${mode}`)
	}

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
    <p class='text-sky-600'>Schedule your free time!</p>
  </div>
  <svelte:component this={clockIcon} size={160} />
  <div class='flex h-12 mt-8 w-120'>
    <PrimaryButton
			onclick={() => handleAuth('signin')}
			name='Sign In'
			height='full'
			width='full'
		/>
    <SecondaryButton
			onclick={() => handleAuth('signup')}
			name='Sign Up'
			height='full'
			width='full'
		/>
  </div>
</div>
