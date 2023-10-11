export async function POST({ request }) {
	const formData = await request.formData();

	console.log(formData);

	return json(data);
}
