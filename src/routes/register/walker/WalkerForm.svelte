<script>
	import Modal from '../Modal.svelte';

	let showModal = false;

	let formData = {
		name: '',
		email: '',
		address: '',
		phone: ''
		// Add more properties as needed
	};

	function handleSubmit() {
		const serverUrl = import.meta.env.VITE_API_URI + '/users';

		console.log(formData);

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
			<p class="title">Register a dog walker</p>
			<p class="subtitle">Please fill out this form</p>
		</div>
	</section>
	<section class="section">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="container is-fluid">
				<div class="field">
					<label class="label" for="name">Name</label>
					<div class="control has-icons-left has-icons-right">
						<input
							bind:value={formData.name}
							name="name"
							class="input"
							type="text"
							placeholder="John Doe"
						/>
						<span class="icon is-small is-left"> 🧑 </span>
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
							placeholder="john@example.com"
						/>
						<span class="icon is-small is-left"> ✉️ </span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label" for="address">Home Address</label>
					<div class="control">
						<input
							bind:value={formData.address}
							name="address"
							class="input"
							type="text"
							placeholder="123 Main St"
						/>
					</div>
				</div>

				<div class="field">
					<label class="label" for="phone">Phone Number</label>
					<div class="control has-icons-left has-icons-right">
						<input
							bind:value={formData.phone}
							name="phone"
							class="input"
							type="tel"
							placeholder="123-456-7890"
						/>
						<span class="icon is-small is-left"> ☎️ </span>
						<span class="icon is-small is-right">
							<i class="fas fa-check" />
						</span>
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
