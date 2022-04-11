import React, { useState } from 'react';
import axios from 'axios';

import './predict.css'
const Predict = () => {
	const [formData, setFormData] = useState({
		lat: undefined,
		long: undefined,
		time: undefined,
		date: undefined,
	});
	const [prediction, setPrediction] = useState({
		Magnitude: null,
		Depth: null,
	});

	const { lat, long, time, date } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	const submitForm = async (e) => {
		e.preventDefault();
		setPrediction({
			Magnitude: null,
			Depth: null,
		});
		let timestamp = new Date(date + ' ' + time).getTime();
		timestamp = parseFloat(timestamp / 1000);
		let data = {
			lat: lat,
			longi: long,
			time: timestamp,
		}
		const result = await axios.post('https://earthquake-predictor-api.herokuapp.com/predict', data)
		console.log(result)
		setPrediction({
			Magnitude: result.data.magnitude,
			Depth: result.data.depth,
		})
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="card my-form p-5 mt-3">
			<h1>Predict</h1>
			<form id="my-form" onSubmit={submitForm}>
				<div className="form-group">
					<label>Latitude</label>
					<input type="number" className="form-control" name="lat" value={lat} onChange={(e) => onChange(e)} />
				</div>
				<div className="form-group">
					<label>Longitude</label>
					<input type="number" className="form-control" name="long" value={long} onChange={(e) => onChange(e)} />
				</div>
				<div className="form-group">
					<label>Time</label>
					<input type="time" className="form-control" name="time" value={time} onChange={(e) => onChange(e)} />
				</div>
				<div className="form-group">
					<label>Date</label>
					<input type="date" className="form-control" name="date" value={date} onChange={(e) => onChange(e)} />
				</div>
				<br/> 
				<button type="submit" className="btn btn-primary">Submit</button>
				</form>
					</div>
					</div>
			<div className=" mt-3 p-5 my-form col">
				<h3>Prediction</h3>
				<p>Magnitude: {prediction.Magnitude}</p>
				<p>Depth: {prediction.Depth}</p>
				</div>
				</div>
		</div>
	)
}

export default Predict;