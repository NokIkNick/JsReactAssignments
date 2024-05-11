import { Outlet } from "react-router-dom"
import { Header } from "./Header"


export const AppLayout = ({currentUser}) => {
    return (
      <>
        <Header currentUser={currentUser}/>
        <Outlet />
      </>
    )
  }