import React, { useState, useEffect } from "react";
import {
  UploadButtonDiv,
  UploadDiv,
  UploadForm,
} from "../../Style/UploadCSS.js";
import ImageUpload from "./ImageUpload.js";
import AudioUpload from "./AudioUpload.js";
import GeoUpload from "./GeoUpload.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Upload(props) {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Audio, setAudio] = useState("");
  const [Time, setTime] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");

  const userId = Cookies.get("userId");

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (Title === "" || Content === "") {
      alert("Fill in the blanks");
    }

    let timestampval = "";
    if (Time !== "") {
      timestampval = Time;
    } else {
      timestampval = String(Date.now());
    }

    let body = {
      userId: userId,
      title: Title,
      content: Content,
      image: Image,
      audio: Audio,
      lat: Latitude,
      long: Longitude,
      timestamp: timestampval,
    };

    console.log(body);

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("Post submitted!");
          navigate("/");
        } else {
          alert("Failed to submit");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <ImageUpload setImage={setImage} />
        <AudioUpload setAudio={setAudio} />
        <GeoUpload
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setTime={setTime}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          type="content"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Submit!
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;
