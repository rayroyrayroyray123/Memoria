import styled from "@emotion/styled";

const MapWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 94vh;
`;

const MapRightDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1280px) and (min-width: 768px) {
    width: 100%;
  }
`;

const MapLeftDiv = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 1280px) and (min-width: 768px) {
    width: 30%;
  }
`;

export { MapLeftDiv, MapRightDiv, MapWrapperDiv };
