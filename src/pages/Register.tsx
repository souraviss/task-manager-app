
// import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  //const notify = () => toast("Wow so easy!");
  const { toast } = useToast();
  return (
    <div>
      <Button
        onClick={() => {
          console.log("ss");
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
      {/* <button onClick={notify}>Notify!</button> */}
      {/* <ToastContainer /> */}
    </div>
  )
}

export default Register