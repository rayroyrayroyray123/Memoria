import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  HomeDiv,
  Head,
  Introduction,
  NoListDiv,
  ListDiv,
  ListItem,
  HomeDivWrapper,
} from "../../Style/ListCSS.js";
import "../../Style/global.css";
import Footer from "../Footer.js";

function List(props) {
  const [PostList, setPostList] = useState([]);
  const userId = Cookies.get("userId");

  useEffect(() => {
    let body = {
      userId: userId,
    };

    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (userId == null) {
    // User not logged in homepage.
    return (
      <>
        <HomeDivWrapper>
          <HomeDiv>
            <Head>
              <h1>Welcome to Memoria</h1>
            </Head>
            <Introduction>
              <h3>Take a step back to live in the moment</h3>
              <h3>Go old school - Go MEMORIA</h3>
              <p>
                Use Memoria to record audio memories with a click of a button.{" "}
                <br />
                Track your records on a map to look back on the moment.
                <br />
                Focus on the present, keep every bit of it!
              </p>
              <br />
              <a href="/login">START</a>
            </Introduction>
          </HomeDiv>
          <img alt="" src="../../../hiking.png" width="40%" height="auto" />
        </HomeDivWrapper>
        <Footer />
      </>
    );
  } else if (PostList.length === 0) {
    return (
      <NoListDiv>
        <h1 
          style={{
            fontFamily: "'Pacifico', cursive", 
            color: "rgba(128, 128, 128, 0.8)",
            paddingTop: "8rem"
          }}
        >
          It's empty here......
        </h1>
        <br />
        <h4>
          <a 
            href="/upload" 
            style={{
              fontFamily: "'Pacifico', cursive", 
              color: "green",
              textDecoration: "None",
            }}>
              Create a memory
          </a>
        </h4>
      </NoListDiv>
    );
  } else {
    return (
      <ListDiv>
        {PostList.map((post, idx) => {
          return (
            <ListItem key={idx}>
              <Link to={`/post/${post.postNum}`}>
                <p className="title">{post.title}</p>
                <p>{post.content}</p>
              </Link>
            </ListItem>
          );
        })}
      </ListDiv>
    );
  }
}

export default List;
