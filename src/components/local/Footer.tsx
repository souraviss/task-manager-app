import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const Footer = () => {
  // const [showModal, setShowModal] = useState(false);
  const style = { color: "red", fontSize: "2.5em", cursor: "pointer" }
  return (
    <section className="fixed left-[96.2%] right-4 w-full bottom-2 z-10 text-white">
      {/* <FaPlus style={style}  onClick={() => setShowModal(!showModal)}/> */}
      {/* <img src={curve} className="w-5 h-5 flex justify-center items-center bg-red-700 rounded-full"/> */}
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button variant="outline" className="text-white">Edit Profile</Button> */}
          <FaPlus style={style} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[725px]">
          <DialogHeader>
            <DialogTitle className="text-white">Edit profile</DialogTitle>
            <DialogDescription className="text-white">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="text-white">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Footer