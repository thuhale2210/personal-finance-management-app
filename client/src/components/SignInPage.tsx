'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Alert } from '@/components/Alert'

const SignInPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/home'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login submitted")
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl
            })
            console.log('Res', res)
            if (!res?.error) {
                router.push('/home')
            } else {
                setError('Invalid email or password')
            }
        } catch (err: any) { }
    }

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
                <div className="mobileBelow:w-4/5 h-[500px] w-1/3 mt-20 isolate aspect-video rounded-2xl bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
                    <form onSubmit={onSubmit} className="flex items-center justify-center flex-col px-10 mobileBelow:my-2 h-full text-center">
                        <h1 className="font-bold text-2xl text-slate-100 p-3">Sign In</h1>
                        <input
                            className="rounded-2xl bg-gray-200 p-3 my-3 w-full text-sm invalid:border-pink-500 invalid:text-pink-600"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Enter your username"
                        />
                        <input
                            className="rounded-2xl bg-gray-200 p-3 my-3 w-full text-sm invalid:border-pink-500 invalid:text-pink-600"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        {error && <Alert>{error}</Alert>}
                        <div className="w-full">
                            <button type="submit" className="bg-primary-yellow hover:font-bold opacity-75 hover:opacity-100 duration-200 w-full rounded-2xl p-3 my-3">
                                Sign In
                            </button>
                        </div>
                        <Link href="#" className="text-slate-400 text-sm md:text-lg my-3 pb-5 hover:underline">
                            Forgot your password?
                        </Link>
                        <div className="w-full text-primary-white">OR</div>
                        <div className="w-full">
                            <button onClick={() => signIn("google")} type="submit" className="flex justify-center bg-primary-yellow hover:font-bold opacity-75 hover:opacity-100 duration-200 w-full rounded-2xl p-3 my-3">
                                Sign In with Google &ensp; <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInPage