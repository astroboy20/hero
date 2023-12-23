import styled from "styled-components";

export const Linkstyle = {
  textDecoration: "none",
  fontWeight: "600",
  color: "black",
};
export const LoginContainer = styled.div`
 padding: 5%;
  height: 100dvh;
  display: inline-flex;
  width: 100%;
  .image{
    display:none ;
  }
  .left-container {
    width: 50%;
  }
  .right-container {
    width: 50%;
    padding: 0% 5%;
  }
   @media screen and (max-width:800px) {
    .left-container{
      display:none ;
    }
    .image{
    display:flex ;
    align-items:center ;
    justify-content:center ;
  }
    .right-container{
      width:100% ;
      padding:0 5% ;
    }
  }
  .login-with-google {
    margin-top: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .button-style {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13.3px;
    font-weight: 600;
  }
  .link {
    text-align: right;
    margin: 5% 0;
    text-decoration: none;
  }
  span {
    font-weight: 600;
    color: #1d1465;
  }
  .or {
    margin: 5%;
    text-align: center;
    position: relative;
  }
  .or::before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    left: 0;
    top: 50%;
    position: absolute;
  }
  .or::after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    right: 0;
    top: 50%;
    position: absolute;
  }
`;

export const FormHeader = styled.header`
  gap: 10px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: "800px") {
    gap: 10px;
    padding: 10px 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:120px;
  form {
    display: flex;
  flex-direction: column;
  gap:10px;
    /* width:2000px ; */
    /* gap:2000px; */
  }
`;
