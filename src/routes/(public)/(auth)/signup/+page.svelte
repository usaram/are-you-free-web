<script lang='ts'>
	import { components } from '@/lib/components'
	import { handler } from '@/lib/graphs/usecase/handler'
	import { stores } from '@/lib/stores'
	import Layout from '@/routes/(public)/__layout.svelte'

	const isSignUp: boolean = true
</script>

<Layout {isSignUp}>
	<form class='w-[60%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
		<div class='w-[70%] flex flex-col m-auto'>
			<div class='text-center mb-6'>
				<div class='mt-10 flex flex-col items-center'>
					<components.asset.Logo />
				</div>
				<h1 class='text-2xl font-bold text-sky-800 mt-3'>
					Sign up to Are you free?
				</h1>
			</div>

			<components.form.Input
				id='username'
				label='Username'
				type='text'
				placeholder='Username'
				value={stores.SignUpFormStore.username}
			/>
			<components.form.Input
				id='email'
				label='Email'
				type='email'
				placeholder='Email Address'
				value={stores.SignUpFormStore.email}
			/>
			<components.form.Input
				id='password'
				label='Password'
				type='password'
				placeholder='Password'
				value={stores.SignUpFormStore.password}
			/>
			<components.form.Input
				id='confirmPassword'
				label='Confirm Password'
				type='password'
				placeholder='Confirm Password'
				value={stores.SignUpFormStore.confirmPassword}
			/>
			<div class='mt-4'>
				<components.button.SecondaryButton
					name='Sign Up'
					height='h-10'
					width='w-full'
					type='submit'
					onclick={() => handler.SignUpWithCredential(stores.SignUpFormStore)}
				/>
			</div>
		</div>
	</form>
</Layout>
