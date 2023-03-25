<script lang="ts">
	import PaginationBtn from '$src/components/PaginationBtn.svelte';
	import VideoCard from '$src/components/VideoCard.svelte';
	import Sidebar from '$src/components/views/Sidebar.svelte';
	import Header from '$src/components/views/Header.svelte';
	import { onMount } from 'svelte';

	let videos: {
		names: string[];
	};

	// Get all videos from the server
	onMount(async () => {
		const response = await fetch('http://localhost:8080/');
		const names = await response.json();
		videos = names;
	});
</script>

<svelte:head>
	<title>Lines</title>
	<meta name="description" content="Video Streaming Platform" />
</svelte:head>

<div class="flex h-full gap-5">
	<Sidebar />
	<main class="flex h-full w-full flex-col gap-5">
		<Header />
		<section class="flex h-fit flex-col  gap-5 rounded-md bg-white p-10	">
			<div class="flex justify-between">
				<h1 class=" text-5xl font-bold ">POV</h1>
				<PaginationBtn />
			</div>
			<div class="flex flex-wrap gap-5">
				{#if videos?.names}
					{#each videos.names as video}
						<VideoCard name={video} />
					{/each}
				{:else}
					<p>No videos found.</p>
				{/if}
			</div>
		</section>
		<footer class="mt-auto w-full overflow-hidden rounded-md bg-white p-10">
			<div class="inline-block animate-marquee whitespace-nowrap text-2xl text-black">
				Under Development. Say Hi to me on Twitter <a
					href="https://twitter.com/milimyname"
					class="underline"
				>
					@mili.myname</a
				>
			</div>
		</footer>
	</main>
</div>
