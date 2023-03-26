<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';

	let videos: {
		names: string[];
	};

	// Get all videos from the server
	async function getVideos() {
		const response = await fetch(`${env.PUBLIC_DEV}`);
		const names = await response.json();
		videos = names;
	}

	onMount(getVideos);

	// Delete a video from the server
	async function handleSubmit(e: any, name: string) {
		const response = await fetch(`${env.PUBLIC_DEV}/delete/${name.replace('videos/', '')}`, {
			method: 'DELETE'
		});

		if (response.ok) console.log('Video deleted successfully');
		else console.error('Error deleting video:', response.statusText);
		getVideos();
	}
</script>

{#if videos?.names}
	<div class="flex h-full flex-col gap-5 rounded-md bg-white p-10">
		<h1 class="text-4xl font-medium">Videos</h1>
		<div class="flex flex-col gap-10">
			{#each videos.names as video}
				<form
					class="flex items-center justify-between gap-20"
					on:submit|preventDefault={(e) => handleSubmit(e, video)}
				>
					<h3>{video.replace('videos/', '')}</h3>
					<button
						type="submit"
						class="rounded-full border-2 px-4 py-2 font-medium transition-colors hover:border-transparent hover:bg-black hover:text-white focus:drop-shadow-md"
						>Delete</button
					>
				</form>
			{/each}
		</div>
	</div>
{:else}
	<p>No videos found.</p>
{/if}
