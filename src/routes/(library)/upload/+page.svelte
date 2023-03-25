<script lang="ts">
	import { redirect } from '@sveltejs/kit';

	let uploading = false;
	async function handleSubmit(e: any) {
		// If no file was selected, do nothing
		if (!e.target[0].files[0]) return;

		const formData = new FormData();
		formData.append('video', e.target[0].files[0]);

		// If the video is uploading, show a message
		uploading = true;

		// Upload the video
		const response = await fetch('http://localhost:8080/upload', {
			method: 'POST',
			body: formData
		});

		if (response.ok) alert('Video uploaded successfully');
		else console.error('Error uploading video:', response.statusText);
		uploading = false;

		redirect(300, `/video/${e.target[0].files[0].name.replace('', '%20')}`);
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="relative flex items-start justify-start gap-40 rounded-md bg-white p-10"
>
	{#if uploading}
		<p
			class="absolute -top-10 left-0 inline-block animate-marquee whitespace-nowrap text-2xl text-black"
		>
			Uploading...
		</p>
	{/if}
	<input
		type="file"
		id="video"
		class="text-sm text-black
        transition-colors	
      file:mr-4 file:rounded-full file:border-0
      file:bg-black file:py-2
      file:px-4 file:text-sm
      file:font-semibold file:text-white
      hover:file:text-white
      hover:file:opacity-75"
		accept="video/*"
	/>
	<button
		type="submit"
		class="active:bg-violet-700bg-violet-500 rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold leading-5 text-white  active:bg-violet-700"
		>Upload</button
	>
</form>
