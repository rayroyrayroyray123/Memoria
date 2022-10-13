import React from "react";
import { ReferenceDiv } from "../Style/ListCSS.js";
import Footer from "./Footer.js";

function References(props) {
  return (
    <>
      <ReferenceDiv>
        <h5>References</h5>
        <p>
          Vernon Adams, Jacques Le Bailly, Botjo Nikoltchev, Ani Petrova.
          'Pacifico' on Google Fonts.
          https://fonts.google.com/specimen/Pacifico?query=pacifico
        </p>
        <p>
          Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly.
          'Montserrat' on Google Fonts.
          https://fonts.google.com/specimen/Montserrat
        </p>
        <p>
          Katerina Limpitsouni. (2022). <i>hiking</i> [Stock image]. unDraw.
          https://undraw.co/illustrations
        </p>
        <p>This website is made with react-bootstrap & Google Maps Platform</p>
      </ReferenceDiv>
      <Footer />
    </>
  );
}

export default References;
