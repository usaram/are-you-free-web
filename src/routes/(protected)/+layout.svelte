<script lang="ts">
  import type { err, session } from '@/lib/types';
  import { getContext, setContext } from 'svelte';

  export let data: {
    session: session;
    nowInJST: string;
    err: err;
  };

  setContext('session', data.session);
  setContext('nowInJST', data.nowInJST);
</script>

<slot />
