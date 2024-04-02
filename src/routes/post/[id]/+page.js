export async function load({params}) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
	const post = await res.json();
	return {post};
}