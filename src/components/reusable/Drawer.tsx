import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useEffect } from "react"
import RightChevronIcon from "../../assets/icons/RightChevronIcon"

export default function Drawer({
  isOpen,
  onClose,
  position = "right",
  width = "w-80",
  closeOnOutsideClick = true,
  children,
}: {
  children: ReactNode | ReactNode[]
  isOpen: boolean
  onClose: () => void
  position: "left" | "right"
  width: string
  closeOnOutsideClick: boolean
}) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex z-50">
            {closeOnOutsideClick && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black"
                onClick={onClose}
              />
            )}
            <motion.div
              initial={{ x: position === "right" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: position === "right" ? "100%" : "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed top-0 ${position}-0 h-full bg-white shadow-lg ${width}`}
            >
              <button onClick={onClose} className="right-3.5 top-3 scale-75 p-2 absolute flex justify-center items-center w-[30px] h-[30px] rounded-full shadow-sm">
                <RightChevronIcon />
                <span className="sr-only">Close drawer</span>
              </button>
              <div className="flex-1 overflow-auto">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
