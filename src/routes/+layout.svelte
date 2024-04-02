<nav>
	<a href="/">All posts</a>
	<a href="/new-post">New post</a>
</nav>

<slot></slot>

<style>
	nav {
		font-size: 2rem;
		margin-bottom: 4rem;
	}

	:global(body) {
		font-family: sans-serif;
	}
</style>