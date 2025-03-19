import { ReactNode } from "react";

export default function AppErrorDisplay({ children}: {children: ReactNode| ReactNode[]}){
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <p className="text-red-500">{children}</p>
    </div>
  )
}