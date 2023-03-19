<script lang="ts">
	import PaginationBtn from '$src/components/PaginationBtn.svelte';
	import VideoCard from '$src/components/VideoCard.svelte';
</script>

<svelte:head>
	<title>Lines</title>
	<meta name="description" content="Video Streaming Platform" />
</svelte:head>

<section class="flex h-full flex-col  gap-5 rounded-md bg-white p-10	">
	<div class="flex justify-between">
		<h1 class=" text-5xl font-bold ">POV</h1>
		<PaginationBtn />
	</div>
	<div class="flex flex-wrap gap-5">
		<VideoCard />
		<VideoCard />
	</div>
</section>
