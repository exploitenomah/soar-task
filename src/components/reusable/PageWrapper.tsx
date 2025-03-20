import { motion } from "framer-motion"
import { ReactNode } from "react"

export function PageWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
