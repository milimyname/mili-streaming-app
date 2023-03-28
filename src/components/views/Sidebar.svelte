<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { icons } from '$src/components/general/icons.js';
	import { sidebar } from '$src/components/general/config';
	import { page } from '$app/stores';

	let loggedIn = false;
	$: if ($page.data.session) {
		loggedIn = true;
	}
</script>

<aside
	class="hidden h-screen flex-col items-center justify-between rounded-md bg-white p-10 lg:sticky lg:top-0 lg:flex"
>
	<a href="/">
		<h1 class="text-3xl font-black">lines</h1>
	</a>

	<nav class="flex flex-1 flex-col justify-center gap-4 text-lg">
		<a
			href="/"
			class="flex items-center gap-4 text-xl transition-colors hover:fill-neutral-500 hover:text-neutral-500"
		>
			<Icon src={icons.home} size="24" title={sidebar.en.nav.home.alt} />
			<span>{sidebar.en.nav.home.name}</span>
		</a>
		<a
			href={loggedIn ? '/library' : '/'}
			class="flex items-center gap-4 text-xl transition-colors hover:fill-neutral-500 hover:text-neutral-500"
		>
			<Icon src={icons.library} size="24" title={sidebar.en.nav.library.alt} />
			<span>{sidebar.en.nav.library.name}</span>
		</a>
		<a
			href="/"
			class="flex items-center gap-4 text-xl transition-colors hover:fill-neutral-500 hover:text-neutral-500"
		>
			<Icon src={icons.playlist} size="24" title={sidebar.en.nav.playlist.alt} />
			<span>{sidebar.en.nav.playlist.name}</span>
		</a>
		<a
			href="/"
			class="flex items-center gap-4 text-xl transition-colors hover:fill-neutral-500 hover:text-neutral-500"
		>
			<Icon src={icons.trending} size="24" title={sidebar.en.nav.trending.alt} />
			<span>{sidebar.en.nav.trending.name}</span>
		</a>
	</nav>
</aside>
