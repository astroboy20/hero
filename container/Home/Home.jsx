import { useState } from "react";
import { Header, Homestyle } from "./Home.style";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const HomePage = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleRoute = () => {
    router.push("/auth");
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
    <Homestyle>
    <Header>
        <div className="logo">
          <h1>Home</h1>
          <p>Collection</p>
        </div>
        <div className="nav">
          <p>pages</p>
          <p>pages</p>
          <p>pages</p>
          <p>pages</p>
          <p>pages</p>
          <p>pages</p>
        </div>
        <div className="icons">
        <IoMdCloseCircleOutline />
        <GiHamburgerMenu />
        </div>
        
      </Header>
    </Homestyle>
     
    </>
  );
};

export { HomePage };
