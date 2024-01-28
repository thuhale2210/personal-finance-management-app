'use client'

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

const LoginPage = () => {
    const router = useRouter()

    // Function to check if user is already authenticated
    const checkAuthentication = () => {
        const userId = sessionStorage.getItem('userId');
        return !!userId; // Returns true if userId exists in sessionStorage
    };

    // Redirect if user is already authenticated
    useEffect(() => {
        if (checkAuthentication()) {
            router.push('/home');
        }
    }, [router]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            handleSignIn();
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email is invalid').required('Email is required'),
        }),
    });

    const handleSignIn = () => {
        axios
            .post('http://localhost:8081/login', formik.values)
            .then((res) => {
                console.log(res.data);
                sessionStorage.setItem('userId', res.data.userId);
                router.push('/dashboard');
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Link href='/'>
                <Image
                    src='/goldenpiglogo.png'
                    width={150}
                    height={75}
                    alt='Logo'
                    className='mt-10 ml-10 mobileBelow:mt-20'
                    priority={true}
                />
            </Link>
            <div className="flex justify-center items-center">
                <div className="mobileBelow:w-4/5 mobileBelow:h-[400px] w-1/3 mt-20 isolate aspect-video rounded-2xl bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
                    <form
                        className="flex items-center justify-center flex-col px-10 my-20 mobileBelow:my-2 h-full text-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 className="font-bold text-2xl text-slate-100 p-5">Login</h1>
                        <input
                            className="rounded-2xl bg-gray-200 p-3 my-3 w-full text-sm invalid:border-pink-500 invalid:text-pink-600"
                            type="email"
                            name="email"
                            placeholder="Enter your username"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {/* <ErrorMessage className="text-red-500 text-xs" name="email" component="div" /> */}
                        <input
                            className="rounded-2xl bg-gray-200 p-3 my-3 w-full text-sm"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {/* <ErrorMessage className="text-red-500 text-xs" name="password" component="div" /> */}
                        <Link href="/home" className="w-full">
                            <button type="submit" className="bg-primary-yellow hover:font-bold opacity-75 hover:opacity-100 duration-200 w-full rounded-2xl p-3 my-3">
                                Login
                            </button>
                        </Link>
                        <a className="text-slate-400 text-sm md:text-lg my-4 pb-5 hover:underline" href="#">
                            Forgot your password?
                        </a>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage