import React from "react";
import { useLoadScript } from "@react-google-maps/api";

import { MapWrapperDiv } from "../Style/MapCSS.js";
import { SpinnerDiv } from "../Style/PostDetailCSS";
import MapLeft from "./Map/MapLeft.js";
import MapRight from "./Map/MapRight.js";
import { Spinner } from "react-bootstrap";

function MapWrapper() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAuWPOxmFxw2wfzvr5IPyG6nEbOE6SpWvw",
  });

  if (!isLoaded) {
    return (
      <SpinnerDiv>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </SpinnerDiv>
    );
  }

  return (
    <>
      <MapWrapperDiv>
        <MapRight></MapRight>
      </MapWrapperDiv>
    </>
  );
}

export default MapWrapper;
