import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import Teams from '../pages/Teams'
import Tasks from '../pages/Tasks'
import Users from '../pages/User'
import DashboardLayout from '../pages/DashboardLayout'

const AppRoutes = () => {
  return (
    <Routes>
  {/* Dashboard layout with nested pages inside */}
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="teams" element={<Teams />} />
    <Route path="tasks" element={<Tasks />} />
    <Route path="users" element={<Users />} />

  </Route>

  {/* Login page */}
  <Route path="/login" element={<LoginPage />} />

  {/* Default redirect */}
  <Route path="" element={<Navigate to="/login" />} />
</Routes>

  )
}

export default AppRoutes
