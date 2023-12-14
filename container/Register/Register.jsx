/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { RegisterContainer, FormContainer, FormHeader } from "./Register.style";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import { BackIcon, EmailIcon, ProfileIcon } from "@/assets";
import { useRouter } from "next/router";
import { Input } from "@chakra-ui/react";

const Register = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/login");
  };
  const handleHomeRoute = () => {
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      usernameusername: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await dispatch(register(values));
    },
  });

  return (
    <>
      <RegisterContainer>
        <div className="left-container">
          <Image
            width={"500"}
            height={"500"}
            src={"/images/Placeholder-bro.svg"}
            alt="banner"
          />
        </div>

        <div className="right-container">
          <FormHeader>
            <span onClick={handleHomeRoute}>
              <BackIcon />
            </span>

            <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
              Sign Up
            </CustomText>
          </FormHeader>

          <FormContainer>
            <form onSubmit={formik.handleSubmit}>
              <Input
                type="text"
                placeholder="Username"
                required
                name="username"
                border={"1.5px solid #878e9c"}
                padding={5}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.errors?.username && formik.errors.username
                    ? `${formik.errors.username}`
                    : null
                }
              />
              <Input
                type="email"
                placeholder="Email"
                required
                border={"1.5px solid #878e9c"}
                padding={5}
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                error={
                  formik.errors?.email && formik.errors.email
                    ? `${formik.errors.email}`
                    : null
                }
              />

              <Input
                type="password"
                placeholder="Password"
                id="password-input"
                required
                border={"1.5px solid #878e9c"}
                padding={5}
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                error={
                  formik.errors?.password && formik.errors.password
                    ? `${formik.errors.password}`
                    : null
                }
              />
              <Input
                type="password"
                placeholder="Confirm password"
                required
                border={"1.5px solid #878e9c"}
                padding={5}
                value={formik.values.confirmpassword}
                name="confirmpassword"
                onChange={formik.handleChange}
                error={
                  formik.errors?.confirmpassword &&
                  formik.errors.confirmpassword
                    ? `${formik.errors.confirmpassword}`
                    : null
                }
              />

              <Button type="submit" variant="defaultButton">
                {"Sign Up"}
              </Button>
              <div className="sign-in">
                <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                  Have an account? <span onClick={handleRoute}>Sign in</span>
                </CustomText>
              </div>
            </form>
          </FormContainer>
        </div>
      </RegisterContainer>
    </>
  );
};

export { Register };
