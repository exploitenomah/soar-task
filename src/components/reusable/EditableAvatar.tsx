import { ChangeEvent, useCallback, useState } from "react"
import PencilIcon from "../../assets/icons/PencilIcon"
import Avatar from "./Avatar"
import { toast } from "react-toastify"

export default function EditableAvatar({
  onChange,
  fileSizeLimit = 5 * 1024 * 1024,
  existingImageSrc,
  name
}: {
  onChange: (file: File) => void
  fileSizeLimit?: number
  existingImageSrc?: string
  name: string
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const toastOptions = { closeButton: true, autoClose: 3000, theme: "dark" }
  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        if (!file.type.startsWith("image/")) {
          toast.warn("Only image files are allowed.", toastOptions)
          e.target.value = ""
          return
        }
        if (file.size > fileSizeLimit) {
          toast.warn("File size must be less than 5MB.", toastOptions)
          e.target.value = ""
          return
        }
        onChange(file)
        if (imagePreview) URL.revokeObjectURL(imagePreview)
        setImagePreview(URL.createObjectURL(file))
      }
    },
    [onChange, imagePreview],
  )
  return (
    <div className="relative z-10">
      <div className="relative z-40">
        <Avatar
          alt={""}
          name={name}
          customSize="w-[6.25rem] h-[6.25rem] md:w-[5.625rem] md:h-[5.625rem] text-xl"
          src={imagePreview ? imagePreview : existingImageSrc}
        />
      </div>
      <label className="z-50 absolute w-[30px] h-[30px] top-[70px] left-[75px] md:top-[61px] md:left-[68px] rounded-full text-white bg-primary-dark flex items-center justify-center">
        <input type="file" accept="image/*" className="sr-only" onChange={handleUpload} />{" "}
        <PencilIcon />
        <span className="sr-only">Upload profile image</span>
      </label>
    </div>
  )
}
