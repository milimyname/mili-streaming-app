<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { icons } from '$src/components/general/icons';
</script>

<div class="flex gap-3">
	<div
		class=" flex h-8 w-8 items-center justify-center rounded-full border border-black transition-colors hover:cursor-pointer hover:border-neutral-500"
	>
		<Icon
			src={icons.arrow}
			size="24"
			title="Next Video"
			className="transition-colors hover:fill-neutral-500"
		/>
	</div>
	<div
		class=" flex h-8 w-8 items-center justify-center rounded-full border border-black transition-colors hover:cursor-pointer hover:border-neutral-500"
	>
		<Icon
			src={icons.arrow}
			size="24"
			title="Next Video"
			className="rotate-180	transition-colors hover:fill-neutral-500"
		/>
	</div>
</div>
