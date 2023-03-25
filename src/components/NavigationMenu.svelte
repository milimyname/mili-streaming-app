<script lang="ts">
	import { signOut, signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	let isOpen = false;
	let innerWidth: number = 0;
	let button: HTMLButtonElement | null = null;

	$: {
		// Add the focus, mouseover, mouseleave event listener
		button?.addEventListener('focus', showDropdown);
		button?.addEventListener('mouseover', showDropdown);
		button?.addEventListener('mouseleave', hideDropdown);
	}

	// Close the dropdown if the user clicks outside of it and the children of the dropdown
	function clickOutside(e: MouseEvent) {
		const dropdown = document.querySelector('.group');
		if (dropdown && !dropdown.contains(<Node>e!.target)) isOpen = false;
	}
	// When the user clicks press the key K, the search input will be focused
	function focusSearch(e: KeyboardEvent) {
		const input = document.querySelector('input');
		if (e.key === 'k' && input) input.focus();
	}

	const showDropdown = () => innerWidth > 1024 && (isOpen = true);
	const hideDropdown = () => innerWidth > 1024 && (isOpen = false);
</script>

<svelte:window on:click={clickOutside} on:keydown={focusSearch} bind:innerWidth />
<svelte:body />

<nav class="group relative">
	{#if $page.data.session}
		<button
			bind:this={button}
			class="dropdown-menu-btn relative z-20 flex gap-4 rounded-md bg-black py-2 px-5 outline-none transition-transform group-hover:cursor-pointer"
			on:click={() => (isOpen = !isOpen)}
		>
			<h3 class="hidden font-medium text-white lg:block">
				{$page.data.session.user?.name ?? 'User'}
			</h3>
			{#if $page.data.session.user?.image}
				<img src={$page.data.session.user?.image} class="h-5 w-5 rounded-full" alt="User" />
			{/if}
		</button>
	{:else}
		<button
			on:click={() => signIn('github')}
			class="rounded-md bg-black py-2 px-5 font-medium text-white outline-none transition-transform group-hover:cursor-pointer"
		>
			Log in
		</button>
	{/if}

	{#if $page.data.session}
		<ul
			class="absolute right-0 z-10 mt-2 w-48 rounded-lg border bg-white  shadow-lg transition-all  duration-500  {isOpen
				? 'top-full opacity-100 '
				: 'top-0   opacity-0'}"
			on:mouseover={() => showDropdown()}
			on:mouseleave={() => hideDropdown()}
			on:focus={() => showDropdown()}
		>
			<li>
				<a href="/upload" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Upload Video</a>
			</li>
			<li>
				<button
					on:click={() => signOut()}
					class="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200">Log out</button
				>
			</li>
		</ul>
	{/if}
</nav>
