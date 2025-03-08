<script lang="ts">
	import PrimaryButton from '@/lib/components/ui/buttons/Primary.svelte'
	import SecondaryButton from '@/lib/components/ui/buttons/Secondary.svelte'

	export let isSignIn: boolean = false
	export let isSignUp: boolean = false

	let primaryButtonName: string = ''
	let secondaryButtonName: string = ''

	if (!isSignIn && !isSignUp) {
		primaryButtonName = 'Sign In'
		secondaryButtonName = 'Sign Up'
	}
	if (isSignIn) {
		primaryButtonName = 'Sign Up'
		secondaryButtonName = 'Back'
	}
	if (isSignUp) {
		primaryButtonName = 'Sign In'
		secondaryButtonName = 'Back'
	}
</script>

<div class="flex justify-end w-full py-6">
	<div class="flex space-x-4 mr-10">
		<PrimaryButton
			name={secondaryButtonName}
			height="h-10"
			width="w-20"
		/>
		<SecondaryButton
			name={primaryButtonName}
			height="h-10"
			width="w-20"
		/>
	</div>
</div>
