"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";

const passwordValidation = Yup.string()
  .required("Password is required")
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/,
    "invalid password"
  );

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: passwordValidation,
});

const SignIn = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Authentication Error:", error.code, error.message);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-login-credentials"
      ) {
        setError("Incorrect email or password. Please check your credentials.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className='mx-auto my-auto w-full md:w-96'>
          <div className='mb-10 flex justify-start md:hidden'>
            <Link href='/'>
              <Image
                src='/assets/hnglogo.svg'
                alt='logo'
                width='188'
                height='21'
                className='mx-auto cursor-pointer'
              />
            </Link>
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Login</h2>
          <p className='text-lg'>Sign In to Checkout our Gallery</p>
          <div className='mt-8 space-y-4'>
            <div>
              <label
                className='mb-2 flex items-end space-x-0.5 text-sm font-semibold'
                htmlFor='email'>
                <span className='text-[#27AE60]'>*</span>
                <span>Email Address</span>
              </label>
              <div className='relative'>
                <Field
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Email Address'
                  className={`h-12 w-full rounded-md border border-gray-200 bg-white bg-transparent px-4 outline-none placeholder:text-sm placeholder:text-gray-300 ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>
            <div>
              <label
                className='mb-2 flex items-end space-x-0.5 text-sm font-semibold'
                htmlFor='password'>
                <span className='text-[#27AE60]'>*</span>
                <span>Password</span>
              </label>
              <div className='relative'>
                <Field
                  type={isPasswordVisible ? "text" : "password"}
                  name='password'
                  id='password'
                  placeholder='Password'
                  className={`h-12 w-full rounded-md border border-gray-200 bg-white bg-transparent px-4 outline-none placeholder:text-sm placeholder:text-gray-300 ${
                    errors.password && touched.password ? "border-red-500" : ""
                  }`}
                />
                <span className='absolute -translate-y-1/2 cursor-pointer flex items-center right-2 top-1/2'>
                  <img
                    src={
                      !isPasswordVisible
                        ? "/assets/svgs/hidepassword.svg"
                        : "/assets/svgs/showpassword.svg"
                    }
                    alt={!isPasswordVisible ? "hidePassword" : "showPassword"}
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                  />
                </span>
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>
          </div>
          {error && <div className='text-red-500 text-sm mb-4'>{error}</div>}
          <div className='flex justify-end'>
            <a className='my-2 text-sm text-[#27AE60]' href='/forgot-password'>
              Forgot Password?
            </a>
          </div>

          <button
            type='submit'
            className='py-3 px-6 w-full bg-black shadow-[-6px_6px_0px_0px_#16BF44]  hover:bg-green-600 hover:shadow-[-6px_6px_0px_0px_#000000] transform hover:-translate-x-1 hover:-translate-y-1 text-white font-bold transition duration-200'>
            Login
          </button>
          <p className='mt-10 text-center text-sm'>
            Not registered?{" "}
            <Link href='/signup' className='text-[#27AE60]'>
              Create Account
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
