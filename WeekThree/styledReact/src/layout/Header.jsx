import { MainNav } from './MainNav'

export const Header = ({currentUser}) => {
    return (
      <>
        <MainNav currentUser={currentUser}/>
      </>
    )
  }
