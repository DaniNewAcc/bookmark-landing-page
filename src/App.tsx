import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center gap-40 text-center">
        <Hero />
        <Features />
      </main>
    </>
  )
}

export default App
