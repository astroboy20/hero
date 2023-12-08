import styled from "styled-components";

export const Linkstyle = {
  textDecoration: "none",
  fontWeight: "600",
  color: "black",
};
export const LoginContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  color: black;
  width: 100%;
  align-items: center;
  .a {
    width: 50%;
  }
  .b {
    width: 50%;
    padding: 0% 5%;
  }
   @media screen and (max-width:800px) {
    .a{
      display:none ;
    }
    .b{
      width:100% ;
      padding:0 5% ;
    }
  }
  .login-with-google {
    margin-top: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* gap: 15px; */
  }
  .button-style {
    display: flex;
    align-items: center;
    /* gap: 5px; */
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
  gap: 5px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: "800px") {
    gap: 5px;
    padding: 5px 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
