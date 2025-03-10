<script>
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	let loading = false
	let user = null

	// Twitter OAuth設定
	const twitterConfig = {
		clientId:    import.meta.env.VITE_TWITTER_CLIENT_ID,
		redirectUri: import.meta.env.VITE_TWITTER_REDIRECT_URI,
		scope:       'tweet.read users.read offline.access',
		authUrl:     'https://twitter.com/i/oauth2/authorize',
		tokenUrl:    'https://api.twitter.com/2/oauth2/token',
	}

	// CSRFプロテクション用のランダムなstate生成
	function generateState() {
		return Math.random().toString(36).substring(2, 15)
			+ Math.random().toString(36).substring(2, 15)
	}

	// PKCE用のcode verifierとchallengeを生成
	async function generatePKCE() {
		const verifier = Math.random().toString(36).substring(2, 15)
			+ Math.random().toString(36).substring(2, 15)
			+ Math.random().toString(36).substring(2, 15)

		// SHA-256を使用してcode challengeを生成
		const encoder = new TextEncoder()
		const data = encoder.encode(verifier)
		const digest = await crypto.subtle.digest('SHA-256', data)

		// Base64-URLエンコード
		const base64Challenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=+$/, '')

		return { verifier, challenge: base64Challenge }
	}

	// Twitterログイン処理を開始
	async function loginWithTwitter() {
		loading = true

		try {
			// stateとPKCE値を生成
			const state = generateState()
			const { verifier, challenge } = await generatePKCE()

			// コールバック時の検証用にsessionStorageに保存
			sessionStorage.setItem('twitter_oauth_state', state)
			sessionStorage.setItem('twitter_code_verifier', verifier)

			// 認証URLを構築
			const authUrl = new URL(twitterConfig.authUrl)
			authUrl.searchParams.append('response_type', 'code')
			authUrl.searchParams.append('client_id', twitterConfig.clientId)
			authUrl.searchParams.append('redirect_uri', twitterConfig.redirectUri)
			authUrl.searchParams.append('scope', twitterConfig.scope)
			authUrl.searchParams.append('state', state)
			authUrl.searchParams.append('code_challenge', challenge)
			authUrl.searchParams.append('code_challenge_method', 'S256')

			// Twitter認証ページにリダイレクト
			window.location.href = authUrl.toString()
		}
		catch (error) {
			console.error('Twitterログイン開始エラー:', error)
			loading = false
		}
	}

	// OAuthコールバック処理
	async function handleCallback(code) {
		try {
			// CSRF攻撃防止のためのstate検証
			const storedState = sessionStorage.getItem('twitter_oauth_state')
			const callbackState = $page.url.searchParams.get('state')

			if (storedState !== callbackState) {
				throw new Error('無効なstateパラメータ')
			}

			// sessionStorageからcode verifierを取得
			const codeVerifier = sessionStorage.getItem('twitter_code_verifier')

			// コードをアクセストークンと交換（通常はサーバーサイドで行う）
			const tokenResponse = await fetch('/api/twitter-callback', {
				method:  'POST',
				headers: { 'Content-Type': 'application/json' },
				body:    JSON.stringify({
					code,
					code_verifier: codeVerifier,
					redirect_uri:  twitterConfig.redirectUri,
				}),
			})

			if (!tokenResponse.ok) {
				throw new Error('トークン交換に失敗しました')
			}

			const tokenData = await tokenResponse.json()

			// アクセストークンを使用してユーザーデータを取得
			const userResponse = await fetch('/api/twitter-user', {
				headers: {
					Authorization: `Bearer ${tokenData.access_token}`,
				},
			})

			if (!userResponse.ok) {
				throw new Error('ユーザーデータの取得に失敗しました')
			}

			user = await userResponse.json()

			// sessionStorageをクリーンアップ
			sessionStorage.removeItem('twitter_oauth_state')
			sessionStorage.removeItem('twitter_code_verifier')

			// ダッシュボードにリダイレクト
			goto('/dashboard')
		}
		catch (error) {
			console.error('コールバック処理エラー:', error)
		}
		finally {
			loading = false
		}
	}

	onMount(() => {
		// Twitterからのコールバックかチェック
		const code = $page.url.searchParams.get('code')
		const error = $page.url.searchParams.get('error')

		if (code) {
			handleCallback(code)
		}
		else if (error) {
			console.error('Twitter OAuth エラー:', error)
			loading = false
		}
	})
</script>

<div class='twitter-login-container'>
	{#if loading}
		<div class='loading'>
			<svg class='spinner' viewBox='0 0 50 50'>
				<circle class='path' cx='25' cy='25' r='20' fill='none' stroke-width='5'></circle>
			</svg>
			<p>処理中...</p>
		</div>
	{:else if user}
		<div class='user-profile'>
			<img src={user.profile_image_url || '/placeholder.svg'} alt={user.name} class='avatar' />
			<h3>{user.name}</h3>
			<p>@{user.username}</p>
			<button on:click={() => { user = null }}>ログアウト</button>
		</div>
	{:else}
		<button class='twitter-login-button' on:click={loginWithTwitter}>
			<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
				<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
			</svg>
			Twitterでログイン
		</button>
	{/if}
</div>

<style>
  .twitter-login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
  }

  .twitter-login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #1DA1F2;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .twitter-login-button:hover {
    background-color: #0c85d0;
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .spinner {
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
  }

  .path {
    stroke: #1DA1F2;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  .user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background-color: #1DA1F2;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #0c85d0;
  }
</style>
