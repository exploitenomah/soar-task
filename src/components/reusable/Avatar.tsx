import { useCallback } from "react"

export default function Avatar({
  src,
  alt = "User Avatar",
  name,
  size = "md",
  shape = "rounded-full",
}: {
  src?: string
  alt: string
  name: string
  size?: "sm" | "md" | "lg"
  shape?: "rounded-full" | "rounded-lg"
}) {
  const sizeClasses = {
    sm: "w-[2.2rem] h-[2.2rem] text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-15 h-15 text-lg",
  }

  const getInitials = useCallback(
    (name: string): string => {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) // Max 2 initials
    },
    [name],
  )

  return (
    <span
      className={`relative flex items-center justify-center bg-primary-light text-primary-blue font-semibold ${
        sizeClasses[size]
      } ${shape}`}
    >
      {src ? (
        <img src={src} alt={alt} className={`object-cover ${sizeClasses[size]} ${shape}`} />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </span>
  )
}
