<script lang="ts">
  import { onMount } from 'svelte';

  let isSignUpMode: boolean = false;
  let isSignInMode: boolean = true;
  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';

  onMount(() => {
    const url = new URL(window.location.href);
    isSignUpMode = url.searchParams.get('mode') === 'signup';
    isSignInMode = !isSignUpMode;
  });

  function toggleForm(mode: 'signin' | 'signup') {
    if (mode === 'signin') {
      isSignInMode = true;
      isSignUpMode = false;
    } else {
      isSignInMode = false;
      isSignUpMode = true;
    }
  }

  function handleSubmit() {
    if (!isSignUpMode) {
      console.log('Sign In', { email, password });
    } else {
      console.log('Sign Up', { username, email, password, confirmPassword });
    }
    // ここに認証ロジックを実装します
  }
</script>

<div class="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fafafa]">
  <div class="w-full max-w-md">
    <h1 class="text-4xl font-bold text-sky-800 mb-8 text-center">
      {isSignUpMode ? 'Create Account' : 'Welcome Back'}
    </h1>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div class="h-[300px]"> <!-- フォームの高さを固定 -->
          <div class:hidden={!isSignUpMode}>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input type="text" id="username" bind:value={username} required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" bind:value={email} required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" id="password" bind:value={password} required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500">
          </div>
          <div class:hidden={!isSignUpMode}>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input type="password" id="confirmPassword" bind:value={confirmPassword} required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500">
          </div>
        </div>
        <button type="submit"
                class="w-full bg-sky-500 text-white hover:bg-sky-600 py-2 px-4 rounded-md font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
          {isSignUpMode ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
    </div>
    <div class="flex justify-center space-x-4">
      <button
        class={`w-1/2 py-2 px-4 rounded-md font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                ${isSignUpMode ? 'bg-white text-sky-600 hover:bg-sky-50 border border-sky-300' : 'bg-sky-100 text-sky-300 cursor-not-allowed'}`}
        on:click={() => toggleForm('signin')}
        disabled={!isSignUpMode}
      >
        Sign In
      </button>
      <button
        class={`w-1/2 py-2 px-4 rounded-md font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                ${!isSignUpMode ? 'bg-white text-sky-600 hover:bg-sky-50 border border-sky-300' : 'bg-sky-100 text-sky-300 cursor-not-allowed'}`}
        on:click={() => toggleForm('signup')}
        disabled={isSignUpMode}
      >
        Sign Up
      </button>
    </div>
  </div>
</div>
