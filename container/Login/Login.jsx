/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormHeader,
  Linkstyle,
  LoginContainer,
} from "./Login.style";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BackIcon, EmailIcon } from "@/assets";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { Input } from '@chakra-ui/react'

const Login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values));
    },
  });

  const handleLoginWithGoogle = async (req, res) => {
    try {
      const response = await fetch("https://api-cliqpod.koyeb.app/auth/google");

      // Check for errors in the fetch request
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Log the content of the response for debugging
      console.log("Response:", await response.text());

      res.status(200).json(data);
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  return (
    <>
      <LoginContainer>
        <div className="a">
          <Image
            width={"500"}
            height={"500"}
            src={"/images/login.svg"}
            alt="banner"
          />
        </div>

        <div className="b">
          <FormHeader>
            <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
              Sign In
            </CustomText>
          </FormHeader>

          <FormContainer>
            <form onSubmit={formik.handleSubmit}>
              <Input
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                name="email"
                required
                error={
                  formik.errors?.email && formik.errors.email
                    ? `${formik.errors.email}`
                    : null
                }
              />
              <br/>
              <Input

                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                name="password"
                required
                error={
                  formik.errors?.password && formik.errors.password
                    ? `${formik.errors.password}`
                    : null
                }
                password
              />
              <div className="link">
                <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                  <Link style={Linkstyle} href={"forgotpassword"}>
                    Forgot Password?
                  </Link>
                </CustomText>
              </div>

              <Button type={"submit"} variant={"defaultButton"}>
                {"Login"}
              </Button>
            </form>
          </FormContainer>

          <div className="or">or</div>

          <div className="login-with-google">
            <Button
              onClick={handleLoginWithGoogle}
              type={"button"}
              variant={"transparent"}
            >
              <div className="button-style">
                <Image
                  src="/images/google.svg"
                  width={25}
                  height={25}
                  alt={""}
                />{" "}
                <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                  Continue with Google
                </CustomText>
              </div>
            </Button>
            <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
              Don`t have an account? <span>Sign Up</span>
            </CustomText>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};

export { Login };
