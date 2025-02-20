import { Navigate, Route, Routes } from "react-router"
import { HomePage, PricingPage } from "../pages"
import { Navbar } from "../ui"



const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/precios" element={<PricingPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </>
  )
}

export default AppRouter