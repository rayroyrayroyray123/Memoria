import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "../../Style/global.css";
import MapLeft from "./MapLeft.js";

import { MapRightDiv } from "../..//Style/MapCSS.js";

function MapRight(props) {
  const [Current, setCurrent] = useState({ lat: -27.5, lng: 153 });
  const [PostList, setPostList] = useState([]);
  const [PostNum, setPostNum] = useState("");
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const userId = Cookies.get("userId");

  useEffect(() => {
    let body = {
      userId: userId,
      postNum: PostNum,
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

    getCurrentLocation();
  }, []);

  useEffect(() => {
    console.log("postnummmmm: ", PostNum);
    let body = {
      postNum: PostNum,
    };
    // console.log(params);
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
    // console.log("PostInfo here: ", PostInfo);
  }, [PostNum]);

  // console.log(PostInfo);

  let positions = [];

  PostList.map((post, idx) => {
    let post_dict = {};
    if (post["lat"]) {
      let position = {
        lat: post["lat"],
        lng: post["long"],
      };
      post_dict[post.postNum] = position;
      positions.push(post_dict);
    }
  });

  // console.log(positions);

  function showCurrentPosition(position) {
    let current_pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrent(current_pos);
  }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showCurrentPosition);
    }
  }

  function markerClick(post_num) {
    setPostNum(post_num);
    console.log(PostInfo);
  }

  return (
    <>
      <MapRightDiv>
        {PostInfo ? <MapLeft postinfo={PostInfo ? PostInfo : null} /> : null}
        <GoogleMap
          zoom={14}
          center={Current}
          mapContainerClassName="map-container"
        >
          <Marker position={Current} />
          {positions.map((pos, idx) => {
            // console.log(pos);
            let post_num = Object.keys(pos)[0];
            let post_loc = Object.values(pos)[0];
            return (
              <Marker
                key={post_num}
                position={post_loc}
                title={post_num}
                onClick={() => {
                  markerClick(post_num);
                }}
              />
            );
          })}
        </GoogleMap>
      </MapRightDiv>
    </>
  );
}

export default MapRight;
