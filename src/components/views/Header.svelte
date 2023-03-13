<script>
	import { icons } from '$src/components/general/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import personLogo from '$lib/images/mili.png';
	import { header } from '$src/components/general/config';
</script>

<header class="flex  items-center justify-between rounded-md bg-white p-10">
	<div class="relative">
		<Icon
			src={icons.search}
			size="20"
			title={header.en.header.search.alt}
			className="absolute fill-white top-2 left-2"
		/>
		<input type="text" class="rounded-md bg-black py-2  pl-10 pr-6 text-white outline-none" />
		<span class="absolute top-2 right-2 font-mono text-xl font-bold text-white"> K </span>
	</div>
	<h2>Demon Slayer Movie</h2>
	<div class="flex items-center gap-4">
		<Icon src={icons.notification} size="24" title={header.en.header.notification.alt} />
		<Icon src={icons.help} size="24" title={header.en.header.help.alt} />
		<div class="flex gap-4 rounded-md bg-black py-2 px-5">
			<h3 class="font-medium text-white">mili is my name</h3>
			<img src={personLogo} alt={header.en.header.profile.alt} />
		</div>
	</div>
</header>
