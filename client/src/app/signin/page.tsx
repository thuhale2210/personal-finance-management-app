import Footer from "@/components/Footer"
import SignInPage from "@/components/SignInPage"

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col animated-gradient">
      <SignInPage />
      <Footer />
    </div>
  )
}

export default Home