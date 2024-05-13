import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export const Logout = ({setCurrentUser, isAuthenticated, setIsAuthenticated}) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentUser({"token": null, "username": null, "roles": null});
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/login");
    }, [])

  return (
    <>
    </>
  )
}
