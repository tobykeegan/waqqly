<script>
	import { onMount } from 'svelte';

	let dogWalkers = [];

	onMount(async () => {
		// Assuming you have a function that fetches data from your database
		const response = await fetch(import.meta.env.VITE_API_URI + '/users');
		const data = await response.json();

		// Assuming your data is an array of objects, where each object represents a dog walker
		dogWalkers = data;
		console.log(dogWalkers);
	});
</script>

<main>
	<section class="section">
		<div class="container">
			<h2 class="title">Dog Walkers</h2>

			{#if dogWalkers.length > 0}
				<table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<!-- Add more columns as needed -->
						</tr>
					</thead>
					<tbody>
						{#each dogWalkers as walker}
							<tr>
								<td>{walker.name}</td>
								<td>{walker.email}</td>
								<td>{walker.address}</td>
								<td>{walker.phone}</td>
								<!-- Add more columns as needed -->
							</tr>
						{/each}
					</tbody>
				</table>
			{:else}
				<p>
					No dog walkers found. <a href="/">Go home</a>, or
					<a href="/register/walker">register a new dog walker</a>
				</p>
			{/if}
		</div>
	</section>
</main>

<style>
	/* Add your styles here if needed */
</style>
