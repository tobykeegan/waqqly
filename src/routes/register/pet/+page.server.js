/** @type {import('./$types').Actions} */

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const incomingPetData = {
			name: data.get('name'),
			breed: data.get('breed'),
			email: data.get('email'),
			gender: data.get('gender'),
			sterile: data.get('sterile'),
			info: data.get('info')
		};

		return { success: true };
	}
};
