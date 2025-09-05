<script>
import { browser } from '$app/env';
import { page } from '$app/stores';
import Menu from '$lib/components/Menu.svelte';
import Footer from '$lib/components/Footer.svelte';
import { webVitals } from '$lib/vitals';
import '../app.css';

const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

$: if (browser && analyticsId) {
  webVitals({
    path: $page.url.pathname,
    params: $page.params,
    analyticsId,
  });
}
</script>

<Menu />

<main>
	<slot />
</main>

<Footer />
