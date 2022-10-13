import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import { PostDiv, SpinnerDiv, Post, BtnDiv } from "../../Style/PostDetailCSS";
import { Spinner } from "react-bootstrap";

function Detail() {
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    // console.log(params);
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setPostInfo(res.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(PostInfo);
  }, [PostInfo]);

  const DeleteHandler = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      let body = {
        postNum: params.postNum,
      };
      console.log(params);
      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("Post deleted!");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <PostDiv>
      {Flag ? (
        <>
          <Post>
            <h1>{PostInfo.title}</h1>
            <p style={{ fontSize: "12px" }}>{PostInfo.timestamp}</p>
            {PostInfo.lat ? (
              <p style={{ fontSize: "12px" }}>
                Location:
                {PostInfo.lat}, {PostInfo.long}{" "}
              </p>
            ) : null}
            {PostInfo.image ? (
              <img
                src={`http://localhost:5000/${PostInfo.image}`}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            ) : null}
            {PostInfo.audio ? (
              <audio src={`http://localhost:5000/${PostInfo.audio}`} controls />
            ) : null}

            <p>{PostInfo.content}</p>
          </Post>
          <BtnDiv>
            <Link to={`/edit/${PostInfo.postNum}`}>
              <button className="edit">Edit</button>
            </Link>
            <button className="delete" onClick={() => DeleteHandler()}>
              Delete
            </button>
          </BtnDiv>
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </PostDiv>
  );
}

export default Detail;
