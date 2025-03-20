<script lang='ts'>
	import Secondary from '@/lib/components/ui/buttons/SecondaryButton.svelte'
	import WithIcon from '@/lib/components/ui/buttons/WithIconButton.svelte'
	import Input from '@/lib/components/ui/forms/Input.svelte'
	import GitHubIcon from '@/lib/components/ui/statics/GitHubIcon.svelte'
	import GoogleIcon from '@/lib/components/ui/statics/GoogleIcon.svelte'
	import Logo from '@/lib/components/ui/statics/Logo.svelte'
	import XIcon from '@/lib/components/ui/statics/XIcon.svelte'
</script>

<form class='w-[50%] h-[90%] mt-10 mx-auto shadow-lg rounded-lg border border-neutral-200'>
	<div class='w-[60%] flex flex-col m-auto'>
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
			<Secondary
				name='Sign In'
				height='h-10'
				width='w-full'
				type='submit'
			/>
		</div>

		<hr class='border-neutral-300 my-6' />

		<div class='flex space-x-2'>
			<WithIcon
				icon={XIcon}
				iconColor='text-white'
				height='h-10'
				width='w-full'
				type='button'
				bg='bg-[#212121]'
				hover='hover:bg-neutral-900'
			/>
			<WithIcon
				icon={GoogleIcon}
				height='h-10'
				width='w-full'
				type='button'
				bg='bg-neutral-50'
				hover='hover:bg-neutral-200'
				border='border'
				borderColor='border-neutral-200'
			/>
			<WithIcon
				icon={GitHubIcon}
				iconColor='text-white'
				height='h-10'
				width='w-full'
				type='button'
				bg='bg-neutral-950'
				hover='hover:bg-neutral-900'
			/>
		</div>

		<div class='h-10 w-full flex items-center justify-center bg-neutral-300 mt-12 rounded-lg'>
			<p class='text-center text-neutral-700'>
				Don't have account?
				<a href='/signup' class='text-black'>Sign Up</a>
			</p>
		</div>
	</div>
</form>
