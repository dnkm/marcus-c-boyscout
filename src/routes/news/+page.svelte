<script>
	import { onMount } from 'svelte';

	let posts = [];

	// sample data for now
	onMount(() => {
		posts = [
			{ id: 1, title: 'Summer Camp Recap', body: 'Great week at camp! Thanks to all volunteers.', likes: 3, comments: [{id:1,text:'Amazing!'}] },
			{ id: 2, title: 'Trail Cleanup', body: 'We will meet at the lodge at 9am this Saturday.', likes: 1, comments: [] }
		];
	});

	function like(post){ post.likes += 1; }
	function addComment(post, text){ if(!text) return; post.comments.push({ id: Date.now(), text }); }
</script>

<h1>Troop News</h1>
<p class="muted">Staff posts important updates here. Click a post to expand comments.</p>

<div class="news-list">
	{#each posts as post (post.id)}
		<article class="card news-item">
			<div class="flex" style="justify-content:space-between">
				<div>
					<h3>{post.title}</h3>
					<p class="news-meta">{post.body}</p>
				</div>
				<div class="center">
					<button class="btn" on:click={() => like(post)}>Like ({post.likes})</button>
				</div>
			</div>

			<details style="margin-top:0.75rem">
				<summary class="muted">Comments ({post.comments.length})</summary>
				<div style="margin-top:0.5rem">
					{#each post.comments as c}
						<div class="card" style="margin-bottom:0.5rem">{c.text}</div>
					{/each}

					<div style="display:flex; gap:0.5rem; margin-top:0.5rem">
						<input placeholder="Add comment" bind:value={post._newComment} />
						<button class="btn" on:click={() => { addComment(post, post._newComment); post._newComment = ''; }}>Comment</button>
					</div>
				</div>
			</details>
		</article>
	{/each}
</div>

