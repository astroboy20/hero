import styled from "styled-components";

const FormData = styled.div`
  /* display: none; */
  /* padding: 5%; */
  @media screen and (max-width: 800px) {
    display: flex;

    width: 100%;
    flex-direction: column;
    /* height: 100vh; */
    .sign-in {
      margin: 5% 0;
      text-align: center;
    }
    span {
      font-weight: 800;
    }
  }
`;
export const RegisterContainer = styled.div`
  padding: 5%;
  height: 100dvh;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  .left-container {
    width: 50%;
  }
  .right-container {
    width: 50%;
    padding: 0% 5%;
  }
  .image{
    display:none ;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    .left-container {
      display: none;
    }
    .right-container {
      width: 100%;
      padding: 0% 5%;
    }
    .image{
    display:flex ;
    align-items:center ;
    justify-content:center ;
  }
  }
`;

export const FormHeader = styled.header`
  gap: 30px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;
export const FormContainer = styled(FormData)``;
export const VerifyContainer = styled(FormData)`
  gap: 30px;
  .verify-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* font-size:200px ; */
  }
`;
