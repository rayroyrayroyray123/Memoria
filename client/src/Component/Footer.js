import React from "react";
import "../Style/global.css";
import { FooterDiv, FooterCont } from "../Style/ListCSS.js";

function Footer() {
  return (
    <FooterDiv>
      <FooterCont
        style={{
          color: "#d5d5d5",
          fontSize: "11px",
        }}
      >
        © 2022-2022 DECO7381 Team Mission:Possible All Rights Reserved.
      </FooterCont>
      <FooterCont className="justify-content-end" activeKey="/home">
        <a
          href="/references"
          style={{
            color: "#d5d5d5",
            fontSize: "11px",
            textDecoration: "none",
          }}
        >
          References
        </a>
      </FooterCont>
    </FooterDiv>
  );
}

export default Footer;
