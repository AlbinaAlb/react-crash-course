import { Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { AboutPage } from "./pages/AboutPage"
import { ProductPage } from "./pages/ProductPage"
import { UserPage } from "./pages/UserPage"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
