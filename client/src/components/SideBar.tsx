import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

const SideBar = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })
    return (
        <aside className='text-light-white-100 h-full relative'>
            <Link href='/home'>
                <Image
                    src='/goldenpiglogo.png'
                    width={150}
                    height={75}
                    alt='Logo'
                    className='mt-7 ml-7'
                    priority={true}
                />
            </Link>

            <ul className='text-left gap-[50px] mt-[50px] ml-7 text-primary-white'>
                {NavLinks.map((section) => (
                    <Link href={section.href} key={section.key}>
                        <li className='my-10'>
                            <Image
                                src={section.logo}
                                width={25}
                                height={25}
                                alt={section.key}
                                priority={true}
                                className='float-left mr-[25px] tabletBelow:py-5'
                            />
                            <div className='tabletBelow:hidden'>{section.text}</div>
                        </li>
                    </Link>
                ))}
            </ul>

            <div className='mobileBelow:hidden bg-primary-gray absolute rounded-[25px] m-7 bottom-0 h-[200px] w-3/4'>
                <UserCard user={session?.user} pagetype={"Client"} />
            </div>
        </aside>
    )
}

export default SideBar