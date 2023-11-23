<script>
	const loadTable = (async () => {
		console.log('Loading table...');
		// Assuming you have a function that fetches data from your database
		const response = await fetch(import.meta.env.VITE_API_URI + '/users');
		const data = await response.json();

		console.log(data);
		// Assuming your data is an array of objects, where each object represents a pet
		return data;
	})();
</script>

<main>
	<section class="section">
		{#await loadTable}
			<h3>Loading...</h3>
		{:then dogWalkers}
			<div class="container">
				<h2 class="title">Dog Walkers</h2>

				{#if dogWalkers.length > 0}
					<table class="table is-fullwidth is-striped is-hoverable">
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
		{:catch error}
			<h3>An error occurred loading the data: {error}</h3>
		{/await}
	</section>
</main>

<style>
	/* Add your styles here if needed */
</style>
