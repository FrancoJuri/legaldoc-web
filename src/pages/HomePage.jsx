import { AboutUs, FAQ, Features, Footer, Hero, ProblemAgitation, Transformation } from "../components";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Hero />
        <ProblemAgitation />
        <Transformation />
        <Features />
        <AboutUs />
        <FAQ />
        <Footer />
    </div>
  )
}

export default HomePage;