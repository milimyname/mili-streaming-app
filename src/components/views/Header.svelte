<script lang="ts">
	import { icons } from '$src/components/general/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { header } from '$src/components/general/config';
	import NavigationMenu from '$src/components/NavigationMenu.svelte';
	import { onMount } from 'svelte';

	let span: HTMLSpanElement;
	const text = 'Demon Slayer Movie';
	let index = 0;

	onMount(() => {
		animateTyping();
	});

	function animateTyping() {
		if (index < text.length) {
			span.textContent += text.charAt(index);
			index++;
			setTimeout(animateTyping, 500);
		} else {
			setTimeout(eraseTyping, 1000);
		}

		return () => {
			index = 0;
			span.textContent = '';
			setTimeout(animateTyping, 1000);
		};
	}

	function eraseTyping() {
		if (index > 0) {
			span.textContent = text.substring(0, index - 1);
			index--;
			setTimeout(eraseTyping, 500);
		} else setTimeout(animateTyping, 1000);
	}
</script>

<header class="flex  items-center justify-between rounded-md bg-white p-10">
	<div class="relative">
		<Icon
			src={icons.search}
			size="20"
			title={header.en.header.search.alt}
			className="absolute fill-white top-2 left-2"
		/>
		<input
			type="text"
			class="hidden rounded-md bg-black  py-2 pl-10 pr-6 text-white outline-none lg:block"
		/>
		<span class="absolute top-2 right-2 font-mono text-xl font-bold text-white"> K </span>
	</div>
	<span id="text" class="hidden lg:block" bind:this={span} />
	<div class="rel flex items-center gap-4">
		<Icon src={icons.notification} size="24" title={header.en.header.notification.alt} />
		<Icon src={icons.help} size="24" title={header.en.header.help.alt} />
		<NavigationMenu />
	</div>
</header>
