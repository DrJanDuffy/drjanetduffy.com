<script>
	import { page } from '$app/stores';
	import { ChevronRight, Home } from 'lucide-svelte';
	
	$: breadcrumbs = getBreadcrumbs($page.url.pathname);
	
	function getBreadcrumbs(pathname) {
		const paths = pathname.split('/').filter(Boolean);
		const crumbs = [{ href: '/', label: 'Home' }];
		
		let currentPath = '';
		paths.forEach((path, index) => {
			currentPath += `/${path}`;
			const label = path
				.split('-')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			crumbs.push({ href: currentPath, label });
		});
		
		return crumbs;
	}
</script>

{#if $page.url.pathname !== '/'}
	<nav class="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center py-3 space-x-2 text-sm">
				{#each breadcrumbs as crumb, index}
					{#if index > 0}
						<ChevronRight class="w-4 h-4 text-gray-400" />
					{/if}
					{#if index === breadcrumbs.length - 1}
						<span class="text-gray-600 font-medium" aria-current="page">{crumb.label}</span>
					{:else}
						<a href={crumb.href} class="text-gray-500 hover:text-primary-600 transition-colors">
							{#if index === 0}
								<Home class="w-4 h-4 inline" />
							{:else}
								{crumb.label}
							{/if}
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</nav>
{/if}

