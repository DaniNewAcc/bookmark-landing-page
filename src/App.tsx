import Extensions from "./components/Extensions"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import Questions from "./components/Questions"
import Wrapper from "./components/ui/Wrapper"

function App() {

  return (
    <>
      <Header />
      <Wrapper wrapperElement="main" className="w-screen justify-center gap-32 text-center lg:mt-12 lg:px-24 lg:gap-20">
        <Hero />
        <Features />
        <Extensions />
        <Questions />
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
