import styled from "@emotion/styled";

const HomeDivWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 auto !important;
  width: 90%;
  height: 91vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 10%;
  }
  @media (max-width: 756px) {
    width: 90%;
    img {
      display: none;
    }
  }
`;

const HomeDiv = styled.div`
  width: 50%;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const Head = styled.div`
  padding-top: 100px;
  padding-bottom: 1.5rem;
  max-width: 756px;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  font-family: "Pacifico", cursive;
  h1 {
    font-size: 60px;
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const Introduction = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  p {
    padding-top: 20px;
  }
  h3 {
    font-size: 24px;
  }
  a {
    line-height: 70px;
    text-align: center;
    color: #000000;
    text-decoration: none;
    height: 70px;
    width: 50%;
    border: none;
    border-radius: 10px;
    background-color: #1cc32b;
    font-size: 22px;
    font-weight: bold;
    &:hover {
      background-color: #079a00;
      font-weight: bold;
    }
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const NoListDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const ListDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background-color: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.1);
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
`;

const FooterDiv = styled.div`
  height: 3vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterCont = styled.div`
  line-height: 3vh;
  margin: 0 10px;
`;

const ReferenceDiv = styled.div`
  padding-top: 100px;
  padding-bottom: 1rem;
  margin: 0 auto !important;
  width: 80%;
  height: 91vh;
  h5 {
    margin-bottom: 50px;
  }
  p {
    font-size: 11px;
    color: grey;
  }
`;

export {
  HomeDiv,
  Head,
  Introduction,
  NoListDiv,
  ListDiv,
  ListItem,
  HomeDivWrapper,
  FooterDiv,
  FooterCont,
  ReferenceDiv,
};
