import React, { useState } from "react";
import MapPicker from "react-google-map-picker";
import DateTimePicker from 'react-datetime-picker';
import axios from "axios";
const DefaultLocation = { lat: 19.1, lng: 72.85 };
const DefaultZoom = 10;

const MapNew = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);
  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  const predictEQ = async (e) => {
    e.preventDefault();
    // setPrediction({
    //   Magnitude: null,
    //   Depth: null,
    // });
    let timestamp = new Date(time).getTime();
    //timestamp = parseFloat(timestamp / 1000);
    console.log(timestamp)
    let data = {
      lat: location.lat,
      longi: location.lng,
      time: timestamp,
    };
    let result = await axios.post(
      "https://eq-pred.herokuapp.com/predict",
      data
    );
    result = result.data
    console.log(result);
    alert(`Depth:${result.depth}\nMagnitude:${result.magnitude}`);
  };
  return (
    <div>
      <button onClick={handleResetLocation}>Reset Location</button>
      <label>Latitute:</label>
      <input type="text" value={location.lat} disabled />
      <label>Longitute:</label>
      <input type="text" value={location.lng} disabled />
      <DateTimePicker onChange={setTime} value={time} />
      <br />
      <button onClick={predictEQ}>Predict</button>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        mapTypeId="roadmap"
        style={{ height: "700px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyDDZimHVsGCUcvy5XIb41oUblr6nA1QX0I"
      />
    </div>
  );
};

export default MapNew;
