import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event: { locals: { getSession: () => any } }) => {
	return {
		session: await event.locals.getSession()
	};
};
