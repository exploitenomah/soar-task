import Avatar from "./Avatar"

export default function UserCard({
  user,
  isSelected,
}: {
  user: {
    profileImage: string
    occupation: string
    name: string
    id: string
  }
  isSelected?: boolean
}) {
  const { profileImage, name, occupation } = user
  return (
    <>
      <figure className="flex flex-col items-center gap-[12px] lg:gap-[15px]">
        <Avatar
          alt={""}
          name={name}
          src={profileImage}
          customSize="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
        />
        <figcaption
          className={`flex flex-col items-center gap-[1px] lg:gap-[5px] text-xs md:text-[1rem] ${isSelected ? "font-bold" : "font-normal"}`}
        >
          <span className="text-primary-dark">{name}</span>
          <span className="text-primary-dark-blue md:text-[0.94rem]">{occupation}</span>
        </figcaption>
      </figure>
    </>
  )
}
