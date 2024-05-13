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
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-sky-800);
  &:hover {
    color: var(--color-sky-600);
  }
  &.active {
    color: var(--color-sky-400);
    border-bottom: 2px solid var(--color-sky-400);
  
  }
`

export const MainNav = ({currentUser, roles, setIsAuthenticated}) => {
  
  useEffect(() => {
    console.log(currentUser);
  }, []) 
  
  
  
  return(
      <>
        <NavigationBar>
          <NavList>
            <ListItem>
              <StyledNavLink to="home">Home</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="about">About</StyledNavLink> 
            </ListItem>
            <ListItem>
              <StyledNavLink to="contact">Contact</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="entities">Entities</StyledNavLink>
            </ListItem>
            {currentUser && <ListItem>{currentUser.username}</ListItem>}
            <ListItem>
              {currentUser.username !== null ? <StyledNavLink to="logout">Logout</StyledNavLink> : <StyledNavLink to="login">Login</StyledNavLink>}
            </ListItem>
          </NavList>    
        </NavigationBar>
      </>
    );
  }