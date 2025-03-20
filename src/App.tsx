import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import SettingsLayout from "./layouts/SettingsLayout"
import DashboardPage from "./pages/Dashboard"
import ProfileSettings from "./pages/ProfileSettings"
import { ToastContainer } from "react-toastify"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <AnimatePresence mode="sync">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="transactions" element={<></>} />
          <Route path="accounts" element={<></>} />
          <Route path="investments" element={<></>} />
          <Route path="credit-cards" element={<></>} />
          <Route path="loans" element={<></>} />
          <Route path="services" element={<></>} />
          <Route path="my-privileges" element={<></>} />
          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<ProfileSettings />} />
            <Route path="preferences" element={<></>} />
            <Route path="security" element={<></>} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </AnimatePresence>
  )
}

export default App
