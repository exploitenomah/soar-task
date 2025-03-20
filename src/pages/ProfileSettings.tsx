import { useCallback } from "react"
import { Formik, Form, FormikHelpers } from "formik"
import * as Yup from "yup"
import AppInput from "../components/reusable/AppInput"
import EditableAvatar from "../components/reusable/EditableAvatar"
import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { updateUserData } from "../redux/slices/user.slice"
import AppSpinner from "../components/reusable/AppSpinner"
import AppErrorDisplay from "../components/reusable/AppErrorDisplay"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[^\w]/, "Password must contain at least one special character"),
  dob: Yup.date().optional(),
  presentAddress: Yup.string().optional(),
  permanentAddress: Yup.string().optional(),
  city: Yup.string().optional(),
  state: Yup.string().optional(),
  postalCode: Yup.string().optional(),
  country: Yup.string().optional(),
})

interface FormValues {
  dob: string
  name: string
  username: string
  presentAddress: string
  permanentAddress: string
  city: string
  state: string
  postalCode: string
  country: string
  email: string
  profileImage?: File | null
  password?: string
}

interface UserData {
  id: number
  name: string
  username: string
  email: string
  dob: string
  presentAddress: string
  permanentAddress: string
  city: string
  state: string
  postalCode: string
  country: string
  profileImage?: string
  password?: string
}

const getInitialValues = (userData: UserData | null): FormValues => ({
  dob: userData?.dob || "",
  presentAddress: userData?.presentAddress || "",
  permanentAddress: userData?.permanentAddress || "",
  city: userData?.city || "",
  state: userData?.state || "",
  postalCode: userData?.postalCode || "",
  country: userData?.country || "",
  email: userData?.email || "",
  username: userData?.username || "",
  name: userData?.name || "",
  profileImage: undefined,
  password: userData?.password,
})

export default function ProfileSettings() {
  const dispatch = useAppDispatch()
  const { data: userData, loading, error } = useAppSelector((state) => state.user)

  const handleSubmit = useCallback(
    (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      try {
        setSubmitting(true)
        const updateData: Partial<UserData> = {
          name: values.name,
          username: values.username,
          email: values.email,
          dob: values.dob ? new Date(values.dob).toLocaleDateString("en-GB") : "",
          presentAddress: values.presentAddress,
          permanentAddress: values.permanentAddress,
          city: values.city,
          state: values.state,
          postalCode: values.postalCode,
          country: values.country,
          password: values.password,
        }
        const result = dispatch(updateUserData(updateData as UserData))
        if (result) toast.success("Profile updated successfully!")
      } catch (error) {
        console.error("Error updating profile:", error)
        toast.error(error instanceof Error ? error.message : "Failed to update profile")
      } finally {
        setSubmitting(false)
      }
    },
    [dispatch],
  )

  return (
    <main>
      {loading ? (
        <AppSpinner />
      ) : error ? (
        <AppErrorDisplay>{error}</AppErrorDisplay>
      ) : (
        <Formik
          initialValues={getInitialValues(userData)}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={false}
        >
          {({ values, handleChange, errors, touched, setFieldValue, isSubmitting }) => (
            <Form className="flex flex-col lg:flex-row gap-[1.375rem] lg:gap-[3.5625rem]">
              <div className="shrink-0 mx-auto lg:mx-0">
                <EditableAvatar
                  onChange={(file) => {
                    setFieldValue("profileImage", file)
                  }}
                  name={values.name}
                />
              </div>
              <div className="w-full">
                <div className="grow grid md:grid-cols-2 gap-4 lg:gap-x-[1.8125rem] lg:gap-y-[1.375rem]">
                  <AppInput
                    inputProps={{
                      name: "name",
                      type: "text",
                      value: values.name,
                      onChange: handleChange,
                    }}
                    label="Your Name"
                    error={touched.name ? errors.name : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "username",
                      type: "text",
                      value: values.username,
                      onChange: handleChange,
                    }}
                    label="User Name"
                    error={touched.username ? errors.username : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "email",
                      type: "email",
                      value: values.email,
                      onChange: handleChange,
                    }}
                    label="Email"
                    error={touched.email ? errors.email : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "password",
                      type: "password",
                      value: values.password,
                      onChange: handleChange,
                    }}
                    label="Password"
                    error={touched.password ? errors.password : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "dob",
                      type: "date",
                      value: values.dob,
                      onChange: handleChange,
                    }}
                    label="Date of Birth"
                    error={touched.dob ? errors.dob : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "presentAddress",
                      type: "text",
                      value: values.presentAddress,
                      onChange: handleChange,
                    }}
                    label="Present Address"
                    error={touched.presentAddress ? errors.presentAddress : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "permanentAddress",
                      type: "text",
                      value: values.permanentAddress,
                      onChange: handleChange,
                    }}
                    label="Permanent Address"
                    error={touched.permanentAddress ? errors.permanentAddress : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "city",
                      type: "text",
                      value: values.city,
                      onChange: handleChange,
                    }}
                    label="City"
                    error={touched.city ? errors.city : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "postalCode",
                      type: "text",
                      value: values.postalCode,
                      onChange: handleChange,
                    }}
                    label="Postal Code"
                    error={touched.postalCode ? errors.postalCode : undefined}
                  />
                  <AppInput
                    inputProps={{
                      name: "country",
                      type: "text",
                      value: values.country,
                      onChange: handleChange,
                    }}
                    label="Country"
                    error={touched.country ? errors.country : undefined}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex justify-center items-center bg-primary-dark text-white mt-4 lg:mt-[2.5625rem] md:ml-auto py-[0.6875rem] md:py-[0.875rem] w-full md:max-w-[190px] rounded-[9px] md:rounded-[15px] text-[0.9375rem] md:text-lg font-medium leading-[100%] mb-4 md:mb-[7px] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </main>
  )
}
