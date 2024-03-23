<script>
	import Modal from '../Modal.svelte';

	let showModal = false;
	let formData = {
		name: '',
		email: '',
		breed: '',
		gender: '',
		sterile: '',
		info: ''
		// Add more properties as needed
	};

	function handleSubmit() {
		const serverUrl = import.meta.env.VITE_API_URI + '/pets';

		fetch(serverUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain'
			},
			body: JSON.stringify(formData)
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				console.log(response);
				return response.json();
			})
			.then(() => {
				// Handle the successful response, e.g., show a success modal
				showModal = true;
			})
			.catch((error) => {
				// Handle errors, e.g., show an error modal
				console.error('Error:', error);
			});
	}

	$: Object.keys(formData).map((key) => formData[key]); // Reevaluate reactive statement on formData change
</script>

<Modal bind:showModal>
	<h2 slot="header">Registration complete</h2>
</Modal>

<main>
	<section class="hero">
		<div class="hero-body">
			<p class="title">Register a pet</p>
			<p class="subtitle">Please fill out this form</p>
		</div>
	</section>
	<section class="section">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="container is-fluid">
				<div class="field">
					<label class="label" for="name">Pet Name</label>
					<div class="control has-icons-left has-icons-right">
						<input
							bind:value={formData.name}
							name="name"
							class="input"
							type="text"
							placeholder="Pet name"
						/>
						<span class="icon is-small is-left"> ✏️ </span>
						<span class="icon is-small is-right">
							<i class="fas fa-check" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label" for="breed">Breed</label>
					<div class="control has-icons-left has-icons-right">
						<input
							bind:value={formData.breed}
							name="breed"
							class="input"
							type="text"
							placeholder="Chocolate Labrador"
						/>
						<span class="icon is-small is-left"> 🐶 </span>
						<span class="icon is-small is-right">
							<i class="fas fa-check" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label" for="email">Email</label>
					<div class="control has-icons-left has-icons-right">
						<input
							bind:value={formData.email}
							name="email"
							class="input"
							type="email"
							placeholder="thedawg@gmail.com"
						/>
						<span class="icon is-small is-left"> ✉️ </span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label" for="gender">Gender</label>
					<div class="control">
						<div class="select">
							<select bind:value={formData.gender} name="gender">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<label class="checkbox">
							<input bind:value={formData.sterile} name="sterile" type="checkbox" />
							Spayed/neutered?
						</label>
					</div>
				</div>

				<div class="field">
					<label class="label" for="info">Additional information</label>
					<div class="control">
						<textarea
							bind:value={formData.info}
							name="info"
							class="textarea"
							placeholder="Please add any details you think might be important about your pet here."
						/>
					</div>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button type="submit" class="button is-link">Submit</button>
					</div>
					<div class="control">
						<a class="button is-link is-light" href="/">Cancel</a>
					</div>
				</div>
			</div>
		</form>
	</section>
</main>
