<script lang='ts'>
	import SecondaryButton from '@/lib/components/ui/buttons/SecondaryButton.svelte'
	import WithIconButton from '@/lib/components/ui/buttons/WithIconButton.svelte'
	import Input from '@/lib/components/ui/forms/Input.svelte'
	import GitHubIcon from '@/lib/components/ui/statics/GitHubIcon.svelte'
	import GoogleIcon from '@/lib/components/ui/statics/GoogleIcon.svelte'
	import Logo from '@/lib/components/ui/statics/Logo.svelte'
	import XIcon from '@/lib/components/ui/statics/XIcon.svelte'
	import Layout from '@/routes/(public)/__layout.svelte'
	import { SignIn } from '@auth/sveltekit/components'
</script>

<Layout>
	<div class='w-[50%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
		<form class='w-[60%] flex flex-col m-auto'>
			<div class='text-center mb-8'>
				<div class='mt-20 flex flex-col items-center'>
					<Logo />
				</div>
				<h1 class='text-2xl font-bold text-sky-800 mt-6'>
					Sign in to Are you free?
				</h1>
			</div>

			<Input
				id='email'
				label='Email'
				type='email'
				placeholder='Email Address'
			/>
			<Input
				id='password'
				label='Password'
				type='password'
				placeholder='Password'
			/>
			<div class='mt-4'>
				<SecondaryButton
					name='Sign In'
					height='h-10'
					width='w-full'
					type='submit'
				/>
			</div>
		</form>

		<div class='w-[60%] flex flex-col m-auto'>
			<hr class='border-neutral-300 my-6' />
			<SignIn
				provider='google'
				signInPage='signin'
				className='w-full'
			>
				<div
					slot='submitButton'
					class='flex w-86 items-center space-x-2'
				>

					<WithIconButton
						icon={XIcon}
						iconColor='text-white'
						height='h-10'
						width='w-1/3'
						type='button'
						bg='bg-[#212121]'
						hover='hover:bg-neutral-950'
					/>
					<WithIconButton
						icon={GoogleIcon}
						height='h-10'
						width='w-1/3'
						type='button'
						bg='bg-neutral-50'
						hover='hover:bg-neutral-300'
						border='border'
						borderColor='border-neutral-200'
					/>
					<WithIconButton
						icon={GitHubIcon}
						iconColor='text-white'
						height='h-10'
						width='w-1/3'
						type='button'
						bg='bg-neutral-950'
						hover='hover:bg-neutral-800'
					/>
				</div>
			</SignIn>
			<div class='h-10 w-full flex items-center justify-center bg-neutral-300 mt-12 rounded-lg'>
				<p class='text-center text-neutral-700'>
					Don't have account?
					<a href='/signup' class='text-black'>Sign Up</a>
				</p>
			</div>
		</div>
	</div>
</Layout>
