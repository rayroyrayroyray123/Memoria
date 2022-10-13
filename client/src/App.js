import React from "react";
import { Routes, Route } from "react-router-dom";

import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import MapWrapper from "./Component/MapWrapper";
import UserProfile from "./Component/User/UserProfile";
import UserProfileEdit from "./Component/User/UserProfileEdit";
import References from "./Component/References";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<MapWrapper />} />
        <Route path="/userprofile/:userId" element={<UserProfile />} />
        <Route path="/userprofile/edit/:userId" element={<UserProfileEdit />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </>
  );
}

export default App;
