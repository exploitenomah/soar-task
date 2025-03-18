import { ChangeEventHandler, useCallback, useState } from "react"
import AppInput from "../components/reusable/AppInput"
import EditableAvatar from "../components/reusable/EditableAvatar"

export default function ProfileSettings() {
  const [profileData, setProfileData] = useState({
    dob: "",
    email: "",
    name: "",
    username: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  })

  const [, setSelectedProfileImage] = useState<File | null>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  return (
    <>
      <main>
        <form className="flex flex-col lg:flex-row gap-[1.375rem] lg:gap-[3.5625rem]">
          <div className="shrink-0 mx-auto lg:mx-0">
            <EditableAvatar onChange={setSelectedProfileImage} />
          </div>
          <div className="w-full">
            <div className="grow grid md:grid-cols-2 gap-4 lg:gap-x-[1.8125rem] lg:gap-y-[1.375rem]">
              <AppInput inputProps={{ name: "name", type: "text" }} label="Your Name" />
              <AppInput inputProps={{ name: "username", type: "text" }} label="User Name" />
              <AppInput
                inputProps={{
                  name: "email",
                  type: "email",
                  value: profileData.email,
                  onChange: handleChange,
                }}
                label="Email"
              />
              <AppInput
                inputProps={{
                  name: "password",
                  type: "text",
                  readOnly: true,
                  value: "**********",
                  disabled: true,
                }}
                label="Password"
              />
              <AppInput
                inputProps={{
                  name: "dob",
                  type: "date",
                  value: profileData.dob,
                  onChange: handleChange,
                }}
                label="Date of Birth"
              />
              <AppInput
                inputProps={{
                  name: "presentAddress",
                  type: "text",
                  value: profileData.presentAddress,
                  onChange: handleChange,
                }}
                label="Present Address"
              />
              <AppInput
                inputProps={{
                  name: "permanentAddress",
                  type: "text",
                  value: profileData.permanentAddress,
                  onChange: handleChange,
                }}
                label="Permanent Address"
              />
              <AppInput
                inputProps={{
                  name: "city",
                  type: "text",
                  value: profileData.city,
                  onChange: handleChange,
                }}
                label="City"
              />
              <AppInput
                inputProps={{
                  name: "postalCode",
                  type: "text",
                  value: profileData.postalCode,
                  onChange: handleChange,
                }}
                label="Postal Code"
              />
              <AppInput
                inputProps={{
                  name: "country",
                  type: "text",
                  value: profileData.country,
                  onChange: handleChange,
                }}
                label="Country"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center bg-primary-dark text-white mt-4 lg:mt-[2.5625rem] lg:ml-auto py-[0.6875rem] md:py-[0.875rem] w-full md:max-w-[190px] rounded-[9px] md:rounded-[15px] text-[0.9375rem] md:text-lg font-medium leading-[100%] mb-4 md:mb-[7px]"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  )
}
