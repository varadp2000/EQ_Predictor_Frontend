import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
//import Predict from './Components/Predict/predict';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import Api from './Components/api/api';
import Team from './Components/Team/team';
import MapNew from './Components/map/map';
function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/predict" component={MapNew} />
					<Route exact path="/api" component={Api} />
					<Route exact path="/team" component={Team} />
					<Route exact path="/mapnew" component={MapNew} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
