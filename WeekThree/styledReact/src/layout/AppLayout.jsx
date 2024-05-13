import { Outlet } from "react-router-dom"
import { Header } from "./Header"


export const AppLayout = ({currentUser, roles, setIsAuthenticated}) => {
    return (
      <>
        <Header currentUser={currentUser} roles={roles} setIsAuthenticated={setIsAuthenticated}/>
        <Outlet />
      </>
    )
  }