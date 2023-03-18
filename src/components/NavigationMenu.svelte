<script lang="ts">
	import personLogo from '$lib/images/mili.png';
	import { header } from '$src/components/general/config';

	let isOpen = false;
	let innerWidth: number = 0;
	let button: HTMLButtonElement | null = null;

	$: if (innerWidth > 1024) {
		// Add the focus, mouseover, mouseleave event listener
		button?.addEventListener('focus', showDropdown);
		button?.addEventListener('mouseover', showDropdown);
		button?.addEventListener('mouseleave', hideDropdown);
	} else {
		// Remove the focus, mouseover, mouseleave event listener
		button?.removeEventListener('focus', showDropdown);
		button?.removeEventListener('mouseover', showDropdown);
		button?.removeEventListener('mouseleave', hideDropdown);
	}

	// Remove Event Listeners when the component is destroyed

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

	const showDropdown = () => (isOpen = true);
	const hideDropdown = () => (isOpen = false);
</script>

<svelte:window on:click={clickOutside} on:keydown={focusSearch} bind:innerWidth />
<svelte:body />

<nav class="group relative">
	<button
		bind:this={button}
		class="dropdown-menu-btn relative z-20 flex gap-4 rounded-md bg-black py-2 px-5 outline-none transition-transform group-hover:cursor-pointer"
		on:click={() => (isOpen = !isOpen)}
	>
		<h3 class="hidden font-medium text-white lg:block">mili is my name</h3>
		<img src={personLogo} alt={header.en.header.profile.alt} />
	</button>

	<ul
		class="absolute z-10 mt-2  w-48 rounded-lg border bg-white  shadow-lg transition-all  duration-500  {isOpen
			? 'top-full opacity-100 '
			: 'top-0   opacity-0'}"
		on:mouseover={() => showDropdown()}
		on:mouseleave={() => hideDropdown()}
		on:focus={() => showDropdown()}
	>
		<li>
			<a href="/user/upload" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Upload Video</a
			>
		</li>
	</ul>
</nav>
