import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { env } from '$env/dynamic/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function authorization({ event, resolve }) {
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/upload') || event.url.pathname.startsWith('/library')) {
		const session = await event.locals.getSession();
		if (!session) throw redirect(303, '/');
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
	SvelteKitAuth({
		secret: env.AUTH_SECRET,
		trustHost: true,
		providers: [GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET })]
	}),
	authorization
);
