import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function AudioUpload(props) {
  const AudioUp = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/audio/upload", formData).then((response) => {
      props.setAudio(response.data.filePath);
    });
  };

  return (
    <div>
      <label>Audio</label>
      <Form.Control
        name="audio"
        type="file"
        className="shadow-none"
        accept="audio/*"
        onChange={(e) => AudioUp(e)}
      />
    </div>
  );
}

export default AudioUpload;
