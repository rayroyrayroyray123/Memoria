import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import ImageUpload from "./ImageUpload.js";
import AudioUpload from "./AudioUpload.js";
import GeoUpload from "./GeoUpload.js";
import {
  UploadButtonDiv,
  UploadDiv,
  UploadForm,
} from "../../Style/UploadCSS.js";

function Edit() {
  const [PostInfo, setPostInfo] = useState({});
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const [Flag, setFlag] = useState(false);
  const [Time, setTime] = useState("");
  const [Image, setImage] = useState("");
  const [Audio, setAudio] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const userId = Cookies.get("userId");

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
      postNum: params.postNum,
      image: Image,
      audio: Audio,
      lat: Latitude,
      long: Longitude,
      timestamp: timestampval,
    };

    axios
      .post("/api/post/edit", body)
      .then((response) => {
        if (response.data.success) {
          alert("Post edited!");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("Failed to edit");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    console.log(params);
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTitle(PostInfo.title);
    setContent(PostInfo.content);
    setImage(PostInfo.image);
    setAudio(PostInfo.audio);
    setLatitude(PostInfo.lat);
    setLongitude(PostInfo.long);
    setTime(PostInfo.timestamp);
  }, [PostInfo]);

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="label">Title</label>
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
            className="cancel"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Edit
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Edit;
