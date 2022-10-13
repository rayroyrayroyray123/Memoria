import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import {
  UserProfileDiv,
  UserProfileForm,
  SaveProfileButtonDiv,
  SpinnerDiv,
} from "../../Style/UserProfileCSS.js";
import { Spinner } from "react-bootstrap";

function UserProfile() {
  const [UserInfo, setUserInfo] = useState({});
  const [Flag, setFlag] = useState(false);

  let params = useParams();
  let navigate = useNavigate();

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

  return (
    <UserProfileDiv>
      {Flag ? (
        <>
          <UserProfileForm>
            <h1>{UserInfo.username}</h1>
            {UserInfo.image ? (
              <img
                src={`http://localhost:5000/${UserInfo.image}`}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            ) : null}
            <label>Email</label>
            <p>{UserInfo.email}</p>
            <label>About Me</label>
            <p>{UserInfo.about}</p>
          </UserProfileForm>
          <SaveProfileButtonDiv>
            <Link to={`/userprofile/edit/${Cookies.get("userId")}`}>
              <button className="edit">Edit Profile</button>
            </Link>
          </SaveProfileButtonDiv>
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </UserProfileDiv>

    /*
    <UserProfileDiv>
      <UserProfileForm>
        <label htmlFor="label">Username</label>
        <input
          id="title"
          type="text"
          value={Username}
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
          <Link to={`/edit/${PostInfo.postNum}`}>
            <button className="edit">Edit Profile</button>
          </Link>
        </SaveProfileButtonDiv>
      </UserProfileForm>
    </UserProfileDiv>
    */
  );
}

export default UserProfile;
