import styled from "@emotion/styled";

const UserProfileDiv = styled.div`
  width: 80%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);
  
`;

const UserProfileImage = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  
  #title {
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    margin-bottom: 10px;
    &:active,
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 350px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-colip: padding-box;
      broder: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-weight: bold;
    margin-top: 10px;
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;


const UserProfileForm = styled.form`
  width: 90%;
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  
  #title {
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    margin-bottom: 10px;
    &:active,
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 350px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-colip: padding-box;
      broder: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-weight: bold;
    margin-top: 10px;
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const SaveProfileButtonDiv = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  button {
    border-radius: 15px;
    padding: 5px 10px;
    background-color: black;
    color: white;
    border: 1px solid black;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    &:nth-last-of-type(1) {
      margin-left: 10px;
    }
    &.cancel {
      margin-right: 10px;
      background-color: black;
      color: white;
      border: 1px solid black;
      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }
  }
`;

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export { UserProfileDiv, UserProfileImage, UserProfileForm, SaveProfileButtonDiv, SpinnerDiv };
