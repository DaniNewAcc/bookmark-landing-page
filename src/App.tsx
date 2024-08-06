import Extensions from "./components/Extensions"
import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Questions from "./components/Questions"
import Wrapper from "./components/ui/Wrapper"

function App() {

  // make form component 
      // validation for email and empty input field 
  // make footer component 

  // make responsive design for all devices 


  return (
    <>
      <Header />
      <Wrapper wrapperElement="main" className="justify-center gap-40 text-center">
        <Hero />
        <Features />
        <Extensions />
        <Questions />
      </Wrapper>
    </>
  )
}

export default App
