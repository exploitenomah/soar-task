import Avatar from "./Avatar"

export default function UserCard({
  profileImage,
  name,
  occupation,
}: {
  profileImage: string
  occupation: string
  name: string
}) {
  return (
    <>
      <figure className="flex flex-col items-center gap-[15px]">
        <Avatar alt={""} name={name} src={profileImage} size="xl" />
        <figcaption className="flex flex-col items-center gap-[5px] text-xs font-normal md:text-[1rem]">
          <span className="text-primary-dark">{name}</span>
          <span className="text-primary-dark-blue md:text-[0.94rem]">{occupation}</span>
        </figcaption>
      </figure>
    </>
  )
}
