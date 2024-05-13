import { MainNav } from './MainNav'

export const Header = ({currentUser, roles, setIsAuthenticated}) => {
    return (
      <>
        <MainNav currentUser={currentUser} roles={roles} setIsAuthenticated={setIsAuthenticated}/>
      </>
    )
  }
