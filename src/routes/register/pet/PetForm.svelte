<script>
	import Modal from '../Modal.svelte';

	let showModal = false;
</script>

<Modal bind:showModal>
	<h2 slot="header">
		Registration complete
	</h2>
</Modal>

<main>
	<section class="hero">
		<div class="hero-body">
			<p class="title">Register a pet</p>
			<p class="subtitle">Please fill out this form</p>
		</div>
	</section>
	<section class="section">
		<form method="POST">
			<div class="container is-fluid">
				<div class="field">
					<label class="label">Pet Name</label>
					<div class="control has-icons-left has-icons-right">
						<input name="name" class="input" type="text" placeholder="Pet name" />
						<span class="icon is-small is-left"> ✏️ </span>
						<span class="icon is-small is-right">
							<i class="fas fa-check" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label">Breed</label>
					<div class="control has-icons-left has-icons-right">
						<input name="breed" class="input" type="text" placeholder="Chocolate Labrador" />
						<span class="icon is-small is-left"> 🐶 </span>
						<span class="icon is-small is-right">
							<i class="fas fa-check" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label">Email</label>
					<div class="control has-icons-left has-icons-right">
						<input name="email" class="input" type="email" placeholder="thedawg@gmail.com" />
						<span class="icon is-small is-left"> ✉️ </span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label">Gender</label>
					<div class="control">
						<div class="select">
							<select name="gender">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<label class="checkbox">
							<input name="sterile" type="checkbox" />
							Spayed/neutered?
						</label>
					</div>
				</div>

				<div class="field">
					<label class="label">Additional information</label>
					<div class="control">
						<textarea
							name="info"
							class="textarea"
							placeholder="Please add any details you think might be important about your pet here."
						/>
					</div>
				</div>

				<div class="field is-grouped">

					<div class="control">
						<a class="button is-link is-light" href="/">Cancel</a>
					</div>
				</div>
			</div>
		</form>
	</section>
</main>
