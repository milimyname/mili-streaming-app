<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { PageData } from './$types';

	export let data: PageData;

	// Get the url video from the server
</script>

<div>
	<h1>{data.video.title}</h1>
	<video
		src={env.PUBLIC_CLOUD_STORAGE_URL + data.video.title.replaceAll(' ', '%20')}
		controls
		width="100%"
		class="h-[40rem]"
		controlsList="nodownload"
	/>
</div>
