import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div`
  height: 100dvh;
  width: 100%;
`;
export const Header = styled.header`
  padding: 2% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  gap: 10px;
  .logo {
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .icons {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .icons {
      display: block;
    }
    .nav {
      display: none;
    }
  }
`;
export const Introduction = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  width: 100%;
  .text {
    width: 50%;
    padding-right: 5%;
    display:flex ;
    flex-direction:column ;
    gap:10px;
    text-align:left ;
  }
  h1 {
    font-size: 40px;
  }
  button {
    background: #68c86c;
    color: #fff;
    border: none;
    padding:10px ;
    border-radius:10px ;
  }
  .image {
    width: 50%;
    border-radius: 10px;
    width:50% ;
  }
  @media screen and (max-width: 800px) {
    .image {
      display: none;
    }
    .text {
      width:100% ;
      text-align:center ;
      gap:20px;
    }
  }
`;
export const StepFourstyle = styled.div`
  background: url("/images/gallery.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
