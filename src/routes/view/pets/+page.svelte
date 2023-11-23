<script>
	const loadTable = (async () => {
		console.log('Loading table...');
		// Assuming you have a function that fetches data from your database
		const response = await fetch(import.meta.env.VITE_API_URI + '/pets');
		const data = await response.json();

		console.log(data);
		// Assuming your data is an array of objects, where each object represents a pet
		return data;
	})();

	const deleteRow = async (petEmail) => {
		await fetch(import.meta.env.VITE_API_URI + '/pets/email/' + petEmail, { method: 'DELETE' })
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => console.log('deleteRow call finished'));
	};
</script>

<main>
	<section class="section">
		{#await loadTable}
			<h3>Loading...</h3>
		{:then pets}
			<div class="container">
				<h2 class="title">Pets</h2>

				{#if pets.length > 0}
					<table class="table is-fullwidth">
						<thead>
							<tr>
								<th>Name</th>
								<th>Breed</th>
								<th>Email</th>
								<th>Gender</th>
								<th>Sterile</th>
								<th>Additional Information</th>
								<th />
								<!-- Add more columns as needed -->
							</tr>
						</thead>
						<tbody>
							{#each pets as pet}
								<tr>
									<td>{pet.name}</td>
									<td>{pet.breed}</td>
									<td>{pet.email}</td>
									<td>{pet.gender}</td>
									<td>{pet.sterile}</td>
									<td>{pet.info}</td>
									<td class="button is-danger" on:click={() => deleteRow(pet.email)}>Delete</td>
									<!-- Add more columns as needed -->
								</tr>
							{/each}
						</tbody>
					</table>
				{:else}
					<p>
						No pets found. <a href="/">Go home</a>, or
						<a href="/register/pet">register a new pet</a>
					</p>
				{/if}
			</div>
		{:catch error}
			<h3>An error occured loading the data: {error}</h3>
		{/await}
	</section>
</main>
