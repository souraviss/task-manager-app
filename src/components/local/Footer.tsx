import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const style = { color: "red", fontSize: "2.5em",cursor:"pointer" }
  return (
    <section className="fixed left-[96.2%] right-4 w-full bottom-2 z-10 text-white">
      <FaPlus style={style}  onClick={() => setShowModal(!showModal)}/>
       {/* <img src={curve} className="w-5 h-5 flex justify-center items-center bg-red-700 rounded-full"/> */}
      
    </section>
  )
}

export default Footer