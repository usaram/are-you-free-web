<script lang='ts'>
	import { components } from '@/lib/components'
	import { handler } from '@/lib/graphs/usecase/handler'
	import { stores } from '@/lib/stores'
	import Layout from '@/routes/(public)/__layout.svelte'
	import { SignIn } from '@auth/sveltekit/components'
</script>

<Layout>
	<div class='w-[50%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
		<form class='w-[60%] flex flex-col m-auto'>
			<div class='text-center mb-8'>
				<div class='mt-20 flex flex-col items-center'>
					<components.asset.Logo />
				</div>
				<h1 class='text-2xl font-bold text-sky-800 mt-6'>
					Sign in to Are you free?
				</h1>
			</div>

			<components.form.Input
				id='email'
				label='Email'
				type='email'
				placeholder='Email Address'
				value={stores.SignInFormStore.email}
			/>
			<components.form.Input
				id='password'
				label='Password'
				type='password'
				placeholder='Password'
				value={stores.SignInFormStore.password}
			/>
			<div class='mt-4'>
				<components.button.SecondaryButton
					name='Sign In'
					height='h-10'
					width='w-full'
					type='submit'
					onclick={() => handler.SignInWithCredential(stores.SignInFormStore)}
				/>
			</div>
		</form>

		<div class='w-[60%] flex flex-col m-auto'>
			<hr class='border-neutral-300 my-6' />
			<div class='flex w-full justify-between items-center'>
				<SignIn
					provider='google'
					signInPage='signin'
				>
					<div
						slot='submitButton'
					>
						<components.button.WithIconButton
							icon={components.asset.GoogleIcon}
							height='h-10'
							width='w-32'
							type='button'
							bg='bg-neutral-50'
							hover='hover:bg-neutral-300'
							border='border'
							borderColor='border-neutral-200'
						/>
					</div>
				</SignIn>
				<SignIn
					provider='github'
					signInPage='signin'
				>
					<div
						slot='submitButton'
					>
						<components.button.WithIconButton
							icon={components.asset.GitHubIcon}
							iconColor='text-white'
							height='h-10'
							width='w-32'
							type='button'
							bg='bg-neutral-950'
							hover='hover:bg-neutral-700'
						/>
					</div>
				</SignIn>
			</div>

			<div class='h-10 w-full flex items-center justify-center bg-neutral-300 mt-12 rounded-lg'>
				<p class='text-center text-neutral-700'>
					Don't have account?
					<a href='/signup' class='text-black'>Sign Up</a>
				</p>
			</div>
		</div>
	</div>
</Layout>
