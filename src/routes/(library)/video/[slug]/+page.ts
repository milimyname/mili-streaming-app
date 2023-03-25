import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		video: {
			title: `${params.slug}`
		}
	};
}) satisfies PageLoad;
