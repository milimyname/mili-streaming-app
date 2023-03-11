<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { icons } from '$src/components/general/icons.js';
	import { sidebar } from '$src/components/general/config';
</script>

<aside class="flex h-full flex-col items-center justify-between rounded-md bg-white p-10">
	<h1 class="text-3xl font-black">lines</h1>

	<nav class="flex flex-1 flex-col justify-center gap-4 text-lg">
		<a href="/" class="flex	items-center gap-4 text-xl transition-colors hover:text-neutral-500">
			<Icon
				src={icons.home}
				color="black"
				className="text-neutral-300"
				size="24"
				title="Custom icon params"
			/>
			<span>{sidebar.en.nav.home}</span>
		</a>
		<a href="/" class="flex items-center gap-4 text-xl">
			<Icon src={icons.library} color="black" size="24" title="Custom icon params" />
			<span>{sidebar.en.nav.library}</span>
		</a>
		<a href="/" class="flex items-center gap-4 text-xl">
			<Icon src={icons.playlist} color="black" size="24" title="Custom icon params" />
			<span>{sidebar.en.nav.playlist}</span>
		</a>
		<a href="/" class="flex items-center gap-4 text-xl">
			<Icon src={icons.trending} color="black" size="24" title="Custom icon params" />
			<span>{sidebar.en.nav.trending}</span>
		</a>
	</nav>
</aside>
