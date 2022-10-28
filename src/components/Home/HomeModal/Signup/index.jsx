import React from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import style from './Signup.module.css';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/images/Logo.png';

function SignupForm() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            userName: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("invalid email address").required("required"),
            userName: Yup.string()
                .required("username not provided.")
                .min(4, "username is too short - should be 4 chars minimum.")
                .matches(/[a-zA-Z]/, "username can only contain latin letters."),
            password: Yup.string()
                .required("password not provided.")
                .min(6, "password is too short - should be 6 chars minimum.")
                .matches(/[a-zA-Z0-9]/, "password can only contain latin letters.")
        }),
        onSubmit: (values) => {
            console.log(values);
            navigate('/NFTGenerator');
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <ul className={`${style.ul} container`}>
                <li className={`${style.NFT_Generator}`}>
                    <img
                        alt="logo"
                        src={Logo}
                        width="39px"
                        height="39px"
                    />{" "}
                    NFT Generator
                </li>
                <li className={`${style.Welcome_Back} mt-4`}>
                    <h3>
                        Welcome Here, Please signup
                        for your account
                    </h3>
                </li>
                <li className={`${style.Label} mt-3`}>
                    Username
                </li>
                <li className={`mt-3`}>
                    <TextField
                        type="text"
                        variant='standard'
                        name='userName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                        error={formik.touched.userName && formik.errors.userName && true}
                        className={`${style.Input}`}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <p className={style.error}>
                            {formik.errors.userName}
                        </p>
                    ) : null}
                </li>
                <li className={`${style.Label} mt-3`}>
                    Email Address
                </li>
                <li className={`mt-3`}>
                    <TextField
                        type="email"
                        variant='standard'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && formik.errors.email && true}
                        className={`${style.Input}`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className={style.error}>
                            {formik.errors.email}
                        </p>
                    ) : null}
                </li>
                <li className={`${style.Label} mt-3`}>
                    Password
                </li>
                <li className={`mt-3`}>
                    <TextField
                        type="password"
                        variant='standard'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={formik.touched.password && formik.errors.password && true}
                        className={`${style.Input}`}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className={style.error}>
                            {formik.errors.password}
                        </p>
                    ) : null}
                </li>
                <li className={`mt-3`}>
                    <button type="submit" className={style.button}>
                        Sign up
                    </button>
                </li>
            </ul>
        </form>
    )
}

export default SignupForm