/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Header, Homestyle, Introduction, WhyStyle } from "./Home.style";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "@/components/Modal";
const HomePage = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

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
            <h1>Hero</h1>
            <p>Collection</p>
          </div>
          <div className="nav">
            <p>Home</p>
            <p>About us</p>
            <p>Collection</p>
          </div>
          <div className="icons">
            {/* <IoMdCloseCircleOutline fontSize={"30px"} onClick={()=>setShowModal(true)}/> */}

            <Modal show={showModal} onClose={() => setShowModal(false)}>
              {" "}
              <div className="nav">
                <p>Home</p>
                <p>About us</p>
                <p>Collection</p>
              </div>
            </Modal>
            <GiHamburgerMenu
              fontSize={"30px"}
              onClick={() => setShowModal(true)}
            />
          </div>
        </Header>
        <Introduction>
          <div className="text">
            <h1>Welcome to Hero Collection</h1>
            <p>
              Discover Fashion that Defines Style! At Hero Collection, indulge
              in a carefully curated selection of trendy fashion essentials.
              Elevate your wardrobe with the latest styles and statement pieces
              that embody sophistication and flair
            </p>
            <button type="button"> Explore Fashion</button>{" "}
          </div>

          <div className="image">
            <Image
              src={"/images/intro-image.jpg"}
              width={"1000"}
              height={"1000"}
              alt="intro-image"
            />
          </div>
        </Introduction>
        <WhyStyle>
          <div className="header">Why Choose Hero Collection?</div>
          <div className="text">
            <div className="sub-text">
              Quality Craftsmanship: Every garment at Hero Collection is
              meticulously crafted with a focus on superior quality and style.
              We select the finest materials and pay attention to every detail,
              ensuring you receive fashion that speaks of excellence.
            </div>
            <div className="sub-text">
              Versatile Selection: Explore our diverse collection encompassing
              an array of styles, cuts, and designs. From chic everyday wear to
              elegant formal attire, discover the perfect ensemble that reflects
              your unique taste.
            </div>
            <div className="sub-text">
              Exclusive Offers: Indulge in irresistible deals and exclusive
              offers regularly. At Hero Collection, we're dedicated to making
              luxury fashion accessible to all fashion enthusiasts.
            sub-text</div>
          </div>
        </WhyStyle>
        {/* <div>
 Our Promise to You At [Your E-commerce Store Name], customer
          satisfaction is our priority. We guarantee: Secure Transactions: Your
          data is safe with us. Shop securely with our encrypted payment
          gateways. Fast Shipping: We strive to deliver your orders swiftly,
          right to your doorstep. 24/7 Customer Support: Need assistance? Our
          dedicated support team is here to help, anytime.
        </div> */}
      </Homestyle>
    </>
  );
};

export { HomePage };
