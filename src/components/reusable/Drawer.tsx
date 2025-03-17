import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useEffect } from "react"

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
            {/* Backdrop */}
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
              <button onClick={onClose} className="self-end p-2">
                X
              </button>
              <div className="flex-1 overflow-auto">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
