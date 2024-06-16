import { Outlet } from "react-router-dom"
import Header from "./components/local/Header"
import Footer from "./components/local/Footer"



function App() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="relative py-10 lg:py-16 xl:py-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
