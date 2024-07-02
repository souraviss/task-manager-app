
import Header from "./components/local/Header"
import Footer from "./components/local/Footer"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { BackgroundGradient } from "./components/ui/background-gradient";
import { GridBackgroundDemo } from "./components/DotbackGround";


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {/* <BackgroundGradient> */}
        {/* <Header /> */}

        {/* <Outlet /> */}
        <GridBackgroundDemo />

        <Footer />
        {/* </BackgroundGradient> */}
      </>
    </QueryClientProvider>
  )
}

export default App
