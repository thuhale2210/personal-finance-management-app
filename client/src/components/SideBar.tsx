import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'
import { getCurrentUser } from '@/lib/session'

const SideBar = async () => {
    const session = await getCurrentUser();

    return (
        <aside className='text-light-white-100 h-full relative'>
            <Link href='/'>
                <Image
                    src='/goldenpiglogo.png'
                    width={150}
                    height={75}
                    alt='Logo'
                    className='mt-10 ml-10'
                    priority={true}
                />
            </Link>

            <ul className='xl:grid md:grid sm:hidden xs:hidden text-left gap-[50px] mt-[50px] ml-10'>
                {NavLinks.map((section) => (
                    <Link href={section.href} key={section.key}>
                        <li>
                            <Image
                                src={section.logo}
                                width={25}
                                height={25}
                                alt={section.key}
                                priority={true}
                                className='float-left mr-[25px]'
                            />
                            {section.text}
                        </li>
                    </Link>
                ))}
            </ul>

            <div className='bg-primary-gray absolute rounded-[25px] m-10 bottom-0 h-[200px] w-2/3'>
                {session?.user ? (
                    <>
                        {session?.user?.image && (
                            <Image
                                src={session.user.image}
                                width={40}
                                height={40}
                                alt={session.user.name}
                                className='rounded-full' />)}
                        {session?.user?.name && <p className='text-center'>{session.user.name}</p>}
                        Financial Goal
                    </>
                ) : (
                    <AuthProvider />
                )}
            </div>
        </aside>
    )
}

export default SideBar