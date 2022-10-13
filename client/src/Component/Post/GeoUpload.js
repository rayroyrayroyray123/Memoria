import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function GeoLocation(props) {
  const GeoUp = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/geo/upload", formData).then((response) => {
      props.setLatitude(response.data.latitude);
      props.setLongitude(response.data.longitude);
      props.setTime(response.data.timestamp);
    });
  };

  return (
    <div>
      <label>Add your location</label>
      <Form.Control
        name="geo"
        type="file"
        className="shadow-none"
        onChange={(e) => GeoUp(e)}
      />
    </div>
  );
}

export default GeoLocation;
