import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<span class="navbar-brand">EQ Predictor</span>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<Link to="/" class="nav-link">Home</Link>
						<Link to="/predict" class="nav-link">Predict</Link>
						<Link to="/api" class="nav-link">API</Link>
						<Link to="/team" class="nav-link">Team</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;