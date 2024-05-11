import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavigationBar = styled.div`
  background-color: var(--color-sky-200);
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-evenly;
  font-size: 1.5rem;
`

const ListItem = styled.li`
  
`

export const MainNav = ({currentUser}) => {
  
  useEffect(() => {
    console.log(currentUser);
  }, []) 
  
  
  
  return(
      <>
        <NavigationBar>
          <NavList>
            <ListItem>
              <NavLink to="home">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="about">About</NavLink> 
            </ListItem>
            <ListItem>
              <NavLink to="contact">Contact</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="posts">Posts</NavLink>
            </ListItem>
            {currentUser && <ListItem>{currentUser.username}</ListItem>}
            <ListItem>
              {currentUser.username !== null ? <NavLink to="logout">Logout</NavLink> : <NavLink to="login">Login</NavLink>}
            </ListItem>
          </NavList>    
        </NavigationBar>
      </>
    );
  }