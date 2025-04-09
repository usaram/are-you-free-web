<script lang='ts'>
	import { components } from '@/lib/components'
	import { handler } from '@/lib/graphs/usecase/handler'
	import { stores } from '@/lib/stores'
	import Layout from '@/routes/(public)/__layout.svelte'

	const isSignUp: boolean = true
</script>

<Layout {isSignUp}>
	<div class='w-[50%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
		<form class='w-[60%] flex flex-col m-auto'>
			<div class='text-center mb-8'>
				<div class='mt-12 flex flex-col items-center'>
					<components.Logo />
				</div>
				<h1 class='text-2xl font-bold text-sky-800 mt-6'>
					Sign up to Are you free?
				</h1>
			</div>

			<components.Input
				id='username'
				label='Username'
				type='text'
				placeholder='Username'
				value={stores.SignUpFormStore.username}
			/>
			<components.Input
				id='email'
				label='Email'
				type='email'
				placeholder='Email Address'
				value={stores.SignUpFormStore.email}
			/>
			<components.Input
				id='password'
				label='Password'
				type='password'
				placeholder='Password'
				value={stores.SignUpFormStore.password}
			/>
			<components.Input
				id='confirmPassword'
				label='Confirm Password'
				type='password'
				placeholder='Confirm Password'
				value={stores.SignUpFormStore.confirmPassword}
			/>
			<div class='mt-4'>
				<components.SecondaryButton
					name='Sign Up'
					height='h-10'
					width='w-full'
					type='submit'
					onclick={() => handler.SignUpWithCredential(stores.SignUpFormStore)}
				/>
			</div>
		</form>
	</div>
</Layout>
