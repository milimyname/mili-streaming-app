<script>
	import { icons } from '$src/components/general/icons';
	import Icon from 'svelte-icons-pack';
</script>

<main class="mt-20 flex items-center justify-center gap-5">
	<a
		href="/"
		class="flex h-8 w-8 items-center justify-center rounded-full border border-black transition-colors hover:cursor-pointer hover:border-neutral-500"
	>
		<Icon
			src={icons.arrow}
			size="24"
			title="Next Video"
			className="transition-colors hover:fill-neutral-500"
		/>
	</a>
	<slot />
</main>
