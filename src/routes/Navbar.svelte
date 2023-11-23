<script>
	let open = false;
</script>

<nav class="navbar is-success" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item is-size-3 has-text-weight-bold" href="/"> waqq.ly </a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
			href=""
			on:click={() => {
				open = !open;
			}}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbar-main" class="navbar-menu" class:is-active={open}>
		<div class="navbar-start">
			<a class="navbar-item" href="/"> Home </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="navbar-link"> Register </a>

				<div class="navbar-dropdown">
					<a class="navbar-item" href="/register/pet"> Register a pet </a>
					<a class="navbar-item" href="/register/walker"> Register a walker </a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="navbar-link"> View </a>

				<div class="navbar-dropdown">
					<a class="navbar-item" href="/view/pets"> View our pets </a>
					<a class="navbar-item" href="/view/walkers"> View the walkers </a>
				</div>
			</div>
		</div>
	</div>
</nav>
