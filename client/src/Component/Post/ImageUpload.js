import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function ImageUpload(props) {
  const ImageUp = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((response) => {
      props.setImage(response.data.filePath);
    });
  };

  return (
    <div>
      <label>Image</label>
      <Form.Control
        name="image"
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => ImageUp(e)}
      />
    </div>
  );
}

export default ImageUpload;
