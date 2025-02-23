import { Navigate, Route, Routes } from "react-router"
import { HomePage, PricingPage } from "../pages"
import { Navbar } from "../ui"
import { Footer } from "../components"



const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/precios" element={<PricingPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </>
  )
}

export default AppRouter