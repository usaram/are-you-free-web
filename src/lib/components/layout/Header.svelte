<script lang='ts'>
	import { goto } from '$app/navigation'
	import { components } from '@/lib/components'

	export let isSignIn: boolean = false
	export let isSignUp: boolean = false

	let primaryButtonName: string = ''
	let primaryButtonPath: string = ''
	let secondaryButtonName: string = ''
	let secondaryButtonPath: string = ''

	if (!isSignIn && !isSignUp) {
		primaryButtonName = 'Sign Up'
		primaryButtonPath = '/signup'
		secondaryButtonName = 'Sign In'
		secondaryButtonPath = '/signin'
	}
	if (isSignIn) {
		primaryButtonName = 'Sign Up'
		primaryButtonPath = '/signup'
		secondaryButtonName = 'Back'
		secondaryButtonPath = '/'
	}
	if (isSignUp) {
		primaryButtonName = 'Sign In'
		primaryButtonPath = '/signin'
		secondaryButtonName = 'Back'
		secondaryButtonPath = '/'
	}
</script>

<div class='flex justify-end w-full py-6'>
	<div class='flex space-x-4 mr-10'>
		<components.button.PrimaryButton
			name={primaryButtonName}
			height='h-10'
			width='w-20'
			onclick={() => { goto(primaryButtonPath) }}
		/>
		<components.button.SecondaryButton
			name={secondaryButtonName}
			height='h-10'
			width='w-20'
			onclick={() => { goto(secondaryButtonPath) }}
		/>
	</div>
</div>
