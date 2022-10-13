import React, { useState, useEffect } from "react";
import axios from "axios";

import { MapLeftDiv } from "../../Style/MapCSS.js";

function MapLeft(props) {
  return (
    <>
      <MapLeftDiv>
        <div class="container pt-3" style={{ margin: "10px" }}>
          <div class="row justify-content-start mt-4">
            <h6 class="col-6">Date</h6>
            <div class="col-12" style={{ fontSize: "12px" }}>
              {props.postinfo.timestamp}
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <h6 class="col-6">Location</h6>
            <div class="col-12" style={{ fontSize: "12px" }}>
              ({props.postinfo.lat}, {props.postinfo.long})
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <h6 class="col-12">Title</h6>
            <div class="col-12" style={{ fontSize: "14px", width: "100%" }}>
              {props.postinfo.title}
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <h6 class="col-4">Content</h6>
            <div
              class="col-12"
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "14px",
                maxHeight: "300px",
                overflow: "scroll",
              }}
            >
              {props.postinfo.content}
            </div>
          </div>
          <div
            class="row justify-content-start mt-4"
            style={{
              width: "110%",
            }}
          >
            <h6 class="col-4">Audio</h6>
            <div class="col-12" style={{ fontSize: "12px", width: "100%" }}>
              {props.postinfo.audio ? (
                <audio
                  style={{ width: "100%" }}
                  src={`http://localhost:5000/${props.postinfo.audio}`}
                  controls
                />
              ) : null}
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <h6 class="col-4">Images</h6>
            <div class="col-12" style={{ fontSize: "12px" }}>
              {props.postinfo.image ? (
                <img
                  src={`http://localhost:5000/${props.postinfo.image}`}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </MapLeftDiv>
    </>
  );
}

export default MapLeft;
