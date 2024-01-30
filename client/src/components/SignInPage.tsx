'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

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
                router.push(callbackUrl)
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
                <div className="mobileBelow:w-4/5 mobileBelow:h-[400px] w-1/3 mt-20 isolate aspect-video rounded-2xl bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
                    <form onSubmit={onSubmit} className="flex items-center justify-center flex-col px-10 my-20 mobileBelow:my-2 h-full text-center">
                        <h1 className="font-bold text-2xl text-slate-100 p-5">Sign In</h1>
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
                            <button onClick={() => signIn("google")} type="submit" className="bg-primary-yellow hover:font-bold opacity-75 hover:opacity-100 duration-200 w-full rounded-2xl p-3 my-3">
                                Sign In with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInPage