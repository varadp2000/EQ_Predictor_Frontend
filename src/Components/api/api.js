import './api.css'
const Api = () => {
	return (
		<div class="main-body">
			<nav id="navbar">
				<header>Documentation Menu</header>
				<a href="#Intro" class="nav-link">
					Earthquake Prediction API</a>
					<a href="#Docs" class="nav-link">
					Documentation</a>
					<a href="#Example" class="nav-link">
					Examples</a>
				<a href="#Model" class="nav-link">
					Model</a>
			</nav>

			<main id="main-doc">
				<section class="main-section" id="Intro">
					<header>
						About
					</header>
					<p>
						Earthquake is one of the most distructive natural calimity events in the world. If alreted in advance, a lot of loss of lives can be prevented from an earthquake. So, keeping the goal, our team has made the earthquake prediction API
					</p>
					<p>
						The API is provided to the users to predict the earthquake in the future. The API is provided in the form of a REST API.
						<br />
						<br />
					</p>
				</section>

				<section class="main-section" id="Docs">
					<header>
						API
					</header>
					<p>
						<ul>
							<li>Method: POST</li>
							<li>Content-Type:application/json</li>
							<li>Input Parameters:<ol><li>Latitude(lat)</li><li>Longitude(longi)</li><li>TImestamp(time)</li></ol></li>
							<li>Output:<ol><li>Magnitude</li><li>Depth</li></ol></li>
							<li>Response Type: JSON</li>
						</ul>
						<p>
							<strong>Input JSON:</strong>
							<code>
								&#123; <br />
								&nbsp;&nbsp;&nbsp;&nbsp;"lat": "12.34",
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;"longi": "56.78",
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;"time": "192345604"
								<br />
								&#125;
							</code>
						</p>
					</p>
					<br /><br />
				</section>

				<section class="main-section" id="Example">
					<header>Sample</header>
					<br />
					<p><strong>JavaScript Axios</strong></p>
					<code>
						import axios from "axios";<br />

						let headersList = &#123;<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"Accept": "*/*",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;"Content-Type": "application/json" <br />
						&#125;&nbsp;&nbsp;&nbsp;<br />

						let reqOptions = &#123;<br />
						&nbsp;&nbsp;&nbsp;&nbsp;url: "http://localhost:5000/predict",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;method: "POST",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;headers: headersList,<br />
						&nbsp;&nbsp;&nbsp;&nbsp;data: &#123;<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lat":12.34,<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"longi":18.25,<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"time":12353423.0<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
						&#125;
						<br />

						axios.request(reqOptions).then(function(response)&#123;<br />
							&nbsp;&nbsp;&nbsp;&nbsp;console.log(response.data);<br />
						&#125;)
					</code>
				</section>

				<section class="main-section" id="Model">
					<header>
						About Our Prediction Model
					</header>
					<p>
						Tech Stack Used:
						<ul>
							<li>Python</li>
							<li>Flask</li>
							<li>Tensorflow</li>
							<li>Neural Networks(LSTM)</li>
						</ul>
					</p>
					<p>
						The Model is trained using the data from the past 20 years. The test accuracy for the model over 2021 earthquake data is <strong>96%</strong>.
						<br />
						<br />
						Input Params:
						<ul>
							<li>Latitude</li>
							<li>Longitude</li>
							<li>TimeStamp</li>
						</ul>
						Output:
						<ul>
							<li>Magnitude</li>
							<li>Depth</li>
						</ul>
						<p>
							To check our dataset goto <a href="https://github.com/varadp2000/BE_Project/blob/master/dataset-new.csv">here</a>
						</p>
					</p>
				</section>

			</main>
		</div>
	)
}

export default Api