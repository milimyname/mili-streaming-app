<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { icons } from '$src/components/general/icons';
	import { main } from '$src/components/general/config';
	import thumbnail from '$lib/images/thumbnail0.png';

	export let name: string;
</script>

<a class="flex flex-col gap-2" href={`/video/${name.replace('videos/', '')}`}>
	<div class="relative">
		<img src={thumbnail} alt="Thumbnail Video 0" class="object-fit w-full rounded-md" />
		<span class="absolute right-2 top-2 rounded-sm bg-white py-1 px-2 text-[10px] font-medium  "
			>4 min</span
		>
	</div>
	<div class="flex flex-col gap-2">
		<h3>{name.replace('videos/', '')}</h3>
		<div class="flex justify-between">
			<div class="flex items-center gap-1">
				<Icon src={icons.eye} size="20" title={main.en.videoCard.views.alt} />
				<span class="text-xs font-medium"> 44</span>
			</div>
			<div class="flex items-center gap-1">
				<Icon src={icons.heart} size="20" title={main.en.videoCard.likes.alt} />
				<span class="text-xs font-medium"> 99</span>
			</div>
			<div class="flex items-center gap-1">
				<Icon src={icons.calendar} size="15" title={main.en.videoCard.postedDate.alt} />
				<span class="text-xs font-medium"> a day ago</span>
			</div>
		</div>
	</div>
</a>
