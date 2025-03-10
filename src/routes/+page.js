export async function load({params}) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await res.json();

	return {posts};
}