import { Outlet } from "react-router-dom"
import Header from "./components/local/Header"
import Footer from "./components/local/Footer"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-full">
        <Header />
        <div className="relative py-10 lg:py-16 xl:py-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
