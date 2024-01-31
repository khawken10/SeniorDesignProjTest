import LoginSignup from "./Components/LoginSignUp"
import Dashboard from "./Components/Dashboard"
import { createRoutesFromElements } from "react-router-dom"

const routes = [
  { path: "/", element: <LoginSignup /> },
  { path: "/dash", element: <Dashboard /> },
]

export default routes
