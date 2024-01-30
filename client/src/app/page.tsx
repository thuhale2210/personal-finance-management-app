import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col animated-gradient">
      <div>
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
        <div>
          <Link href="/home" className="w-1/3">
            <button type="submit" className="bg-primary-yellow hover:font-bold opacity-75 hover:opacity-100 duration-200 w-1/3 rounded-2xl p-3 my-3">
              Start
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home