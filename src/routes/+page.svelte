<script>
	export let data;
</script>

<ul>
	{#each data.posts as post}
		<li><a href={`/post/${post.id}`}>{post.title}</a></li>
	{/each}
</ul>
