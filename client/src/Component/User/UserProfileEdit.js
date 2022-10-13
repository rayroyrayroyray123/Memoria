import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";

import {
  UserProfileDiv,
  UserProfileImage,
  UserProfileForm,
  SaveProfileButtonDiv,
  SpinnerDiv,
} from "../../Style/UserProfileCSS.js";

function UserProfileEdit(props) {
  const [UserInfo, setUserInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const [Image, setImage] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [AboutMe, setAboutMe] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const userId = Cookies.get("userId");
  
    if (UserName === "" || Email === "") {
      alert("Fill in the blanks");
    }
  
    let body = {
      userId: userId,
      image: Image,
      username: UserName,
      email: Email,
      about: AboutMe
    };  
  
    axios
      .post("/api/user/userprofileEdit", body)
      .then((response) => {
        if (response.data.success) {
          alert("User Profile Updated!");
          navigate(`/userprofile/${userId}`);
        } else {
          alert("Failed to update!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let body = {
      userId: Cookies.get("userId"),
    };
    console.log(body.userId);
    axios
      .post("/api/user/userprofile", body)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setUserInfo(res.data.user);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(UserInfo);
  }, [UserInfo]);

  useEffect(() => {
    setImage(UserInfo.image);
    setUserName(UserInfo.username);
    setEmail(UserInfo.email);
    setAboutMe(UserInfo.about);
  }, [UserInfo]);
  
  return (
    <UserProfileDiv>
      <UserProfileForm>
        <label htmlFor="label">User Name</label>
        <input
          id="title"
          type="text"
          value={UserName}
          onChange={(e) => {
            setUserName(e.currentTarget.value);
          }}
        />

        <label htmlFor="label">Email Address</label>
        <input
          id="title"
          type="text"
          value={Email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />

        <label htmlFor="content">About Me</label>
        <textarea
          id="content"
          type="content"
          value={AboutMe}
          onChange={(e) => {
            setAboutMe(e.currentTarget.value);
          }}
        />

        <SaveProfileButtonDiv>
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
            Save Profile!
          </button>
        </SaveProfileButtonDiv>
      </UserProfileForm>
    </UserProfileDiv>
  );
  
}
  
export default UserProfileEdit;
