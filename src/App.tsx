
import Header from "./components/local/Header"
// import { Toaster } from "@/components/ui/toaster"
import Footer from "./components/local/Footer"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { BackgroundGradient } from "./components/ui/background-gradient";
import { GridBackgroundDemo } from "./components/DotbackGround";


import { useDialog } from "./utils/useDialog";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
     
        {/* <BackgroundGradient> */}
        {/* <Header /> */}

        {/* <Outlet /> */}
        <GridBackgroundDemo />

        <Footer />
        {/* </BackgroundGradient> */}
        
      
    </QueryClientProvider>
  )
}

export default App
