<script>
	import { onMount } from 'svelte';

	let pets = [];

	onMount(async () => {
		// Assuming you have a function that fetches data from your database
		const response = await fetch(import.meta.env.VITE_API_URI + '/pets');
		const data = await response.json();

		// Assuming your data is an array of objects, where each object represents a pet
		pets = data;
	});
</script>

<main>
	<section class="section">
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
							<!-- Add more columns as needed -->
						</tr>
					</thead>
					<tbody>
						{#each pets as pet (pet.id)}
							<tr>
								<td>{pet.name}</td>
								<td>{pet.breed}</td>
								<td>{pet.email}</td>
								<td>{pet.gender}</td>
								<td>{pet.sterile ? 'Yes' : 'No'}</td>
								<td>{pet.info}</td>
								<!-- Add more columns as needed -->
							</tr>
						{/each}
					</tbody>
				</table>
			{:else}
				<p>
					No pets found. <a href="/">Go home</a>, or <a href="/register/pet">register a new pet</a>
				</p>
			{/if}
		</div>
	</section>
</main>

<style>
	/* Add your styles here if needed */
</style>
