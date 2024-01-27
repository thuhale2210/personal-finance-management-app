import Footer from "@/components/Footer"
import LoginPage from "@/components/LoginPage"

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col animated-gradient">
      <LoginPage />
      <Footer />
    </div>
  )
}

export default Home