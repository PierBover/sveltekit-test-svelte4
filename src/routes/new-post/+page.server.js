import {redirect} from '@sveltejs/kit';

export const actions = {
	default: async (event) => {

		const data = await event.request.formData();
		const title = data.get('title');
		const body = data.get('body');

		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title,
				body,
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		if (response.ok) {
			const post = await response.json();
			console.log(post);
			// we're redirecting to id 1 because the API is not really creating a new item
			redirect(303, `/post/1`);
		}

	}
}