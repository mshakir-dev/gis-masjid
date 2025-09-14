import { useEffect } from "react";

/**
 * Automatically closes a sidebar (like mobile nav) when screen width exceeds a threshold.
 * 
 * @param isOpen - Boolean indicating if the drawer is open
 * @param onClose - Function to close the drawer
 * @param breakpoint - Minimum width at which drawer should auto-close (default 968px)
 */
const useAutoCloseSidebar = (isOpen: boolean, onClose: () => void, breakpoint: number = 968) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose, breakpoint]);
};

export default useAutoCloseSidebar;
