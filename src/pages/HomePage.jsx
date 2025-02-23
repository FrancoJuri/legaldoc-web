import { AboutUs, FAQ, Features, Hero, ProblemAgitation, Transformation } from "../components";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Hero />
        <ProblemAgitation />
        <Transformation />
        <Features />
        <AboutUs />
        <FAQ />
    </div>
  )
}

export default HomePage;