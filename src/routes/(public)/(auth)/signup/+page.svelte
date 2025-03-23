<script lang='ts'>
	import SecondaryButton from '@/lib/components/ui/buttons/SecondaryButton.svelte'
	import Input from '@/lib/components/ui/forms/Input.svelte'
	import Logo from '@/lib/components/ui/statics/Logo.svelte'
	import { SignUpWithCredential } from '@/lib/graphs/usecases/handlers/auth/SignUpWithCredential'
	import { SignUpFormStore } from '@/lib/stores/components/forms/SignUpFormStore'
	import Layout from '@/routes/(public)/__layout.svelte'

	const isSignUp: boolean = true
</script>

<Layout {isSignUp}>
	<form class='w-[60%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
		<div class='w-[70%] flex flex-col m-auto'>
			<div class='text-center mb-6'>
				<div class='mt-10 flex flex-col items-center'>
					<Logo />
				</div>
				<h1 class='text-2xl font-bold text-sky-800 mt-3'>
					Sign up to Are you free?
				</h1>
			</div>

			<Input
				id='username'
				label='Username'
				type='text'
				placeholder='Username'
				value={SignUpFormStore.username}
			/>
			<Input
				id='email'
				label='Email'
				type='email'
				placeholder='Email Address'
				value={SignUpFormStore.email}
			/>
			<Input
				id='password'
				label='Password'
				type='password'
				placeholder='Password'
				value={SignUpFormStore.password}
			/>
			<Input
				id='confirmPassword'
				label='Confirm Password'
				type='password'
				placeholder='Confirm Password'
				value={SignUpFormStore.confirmPassword}
			/>
			<div class='mt-4'>
				<SecondaryButton
					name='Sign Up'
					height='h-10'
					width='w-full'
					type='submit'
					onclick={() => SignUpWithCredential(SignUpFormStore)}
				/>
			</div>
		</div>
	</form>
</Layout>
