<script>
	import Header from '$src/components/views/Header.svelte';
	import Sidebar from '$src/components/views/Sidebar.svelte';

	import './styles.css';
</script>

<Sidebar />
<main class="h-full w-full">
	<Header/>
	<slot />
</main>
