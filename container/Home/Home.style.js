import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div`
  
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
  .icons{
    display:none ;
  }
  @media screen and (max-width:800px) {
    
  }
`;
export const StepOnestyle = styled.div`
  background: url("/images/home.png");
  background-repeat: no-repeat;
  height: 70vh;
  background-size: cover;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    /* gap: 20999px; */
    padding: 5%;
  }
`;

export const StepTwostyle = styled.div`
  background: url("/images/event.png");
  background-repeat: no-repeat;
  /* height:80vh; */
  background-size: cover;
  height: 70vh;
  .text {
    display: flex;
    /* flex-direction: column; */
    padding: 5%;
  }
`;
export const StepThreestyle = styled.div`
  background: url("/images/real-qr.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
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
