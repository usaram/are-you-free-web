<script lang='ts'>
	import Secondary from '@/lib/components/ui/buttons/SecondaryButton.svelte'
	import Input from '@/lib/components/ui/forms/Input.svelte'
	import Logo from '@/lib/components/ui/statics/Logo.svelte'
</script>

<form class='w-[50%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
	<div class='w-[60%] flex flex-col m-auto'>
		<div class='text-center mb-8'>
			<div class='mt-20 flex flex-col items-center'>
				<Logo />
			</div>
			<h1 class='text-2xl font-bold text-sky-800 mt-6'>
				Sign up to Are you free?
			</h1>
		</div>

		<Input
			id='username'
			label='Username'
			type='text'
			placeholder='Username'
		/>
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
		<Input
			id='confirmPassword'
			label='Confirm Password'
			type='password'
			placeholder='Confirm Password'
		/>
		<div class='mt-4'>
			<Secondary
				name='Sign Up'
				height='h-10'
				width='w-full'
				type='submit'
			/>
		</div>
	</div>
</form>
