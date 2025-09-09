<script>
	import { page } from '$app/stores';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="site-header">
	<div class="header-inner container">
		<a class="logo" href="/">Troop 1747</a>
		<nav class="main-nav">
			<a href="/news" class:active={$page.url.pathname === '/news'}>News</a>
			<a href="/events" class:active={$page.url.pathname.startsWith('/events')}>Events</a>
			<a href="/calendar" class:active={$page.url.pathname === '/calendar'}>Calendar</a>
			<a href="/troop-info" class:active={$page.url.pathname === '/troop-info'}>About</a>
			<a href="/donate" class:active={$page.url.pathname === '/donate'}>Donate</a>
			<!-- <a href="/admin" class:admin-link>Admin</a> -->
		</nav>
	</div>
</header>

<main class="container">
	{@render children?.()}
</main>

<footer class="site-footer">
	<div class="container">© {new Date().getFullYear()} Troop 42 — All rights reserved</div>
</footer>

<style>
	/* Small, self-contained layout styles — main styling lives in src/app.css */
	.site-header {
		background: var(--brand);
		color: var(--on-brand);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 0;
	}
	.logo {
		font-weight: 700;
		color: inherit;
		text-decoration: none;
		font-size: 1.1rem;
	}
	.main-nav a {
		margin-left: 1rem;
		color: inherit;
		text-decoration: none;
		padding: 0.35rem 0.5rem;
		border-radius: 6px;
	}
	.main-nav a.active {
		background: rgba(255, 255, 255, 0.06);
	}
	.site-footer {
		padding: 1rem 0;
		color: #666;
		font-size: 0.9rem;
		margin-top: 2rem;
	}
</style>
