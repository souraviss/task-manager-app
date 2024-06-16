// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";



const Header = () => {
    // const pathname = useLocation();
    // const [openNavigation, setOpenNavigation] = useState(false);
    // const toggleNavigation = () => {
    //     if (openNavigation) {
    //         setOpenNavigation(false);
    //         enablePageScroll();
    //     } else {
    //         setOpenNavigation(true);
    //         disablePageScroll();
    //     }
    // };

    // const handleClick = () => {
    //     if (!openNavigation) return;

    //     enablePageScroll();
    //     setOpenNavigation(false);
    // };
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-n-6 
    lg:bg-n-8/90 lg:backdrop-blur-sm">
        {/* Logo section */}
        Logo
        {/* icon section */}

    </header>
  )
}

export default Header