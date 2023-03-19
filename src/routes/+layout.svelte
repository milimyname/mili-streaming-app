<script>
	import Header from '$src/components/views/Header.svelte';
	import Sidebar from '$src/components/views/Sidebar.svelte';

	import './styles.css';
</script>

<Sidebar />
<main class="flex h-full w-full flex-col gap-4">
	<Header />
	<slot />
	<div class="mt-auto w-full overflow-hidden rounded-md bg-white p-10">
		<div class="inline-block animate-marquee whitespace-nowrap text-2xl text-black">
			Under Development. Say Hi to me on Twitter @mili.myname
		</div>
	</div>
</main>
