import React, { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes, useParams } from "react-router-dom"
import { AppLayout } from "./layout/AppLayout"
import { Home } from "./page/Home"
import { PageNotFound } from "./page/PageNotFound"
import { Login } from "./page/Login"
import { Logout } from "./page/Logout"
import { ProtectedRoute } from "./page/ProtectedRoute"



function App() {
  const [currentUser, setCurrentUser] = useState({token: null, username: null, roles: null});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const Entities = ({currentUser}) => {
    return (
      <>
        {currentUser.username !== null && <h1>Entities</h1> ? <div>
          <h1>Entities</h1>
          <Outlet/>
        </div> : <h1>Not allowed entry</h1>}
      </>
    )
  }

  const Entity = () => {
    const params = useParams();
    
    return (
      <>
        <h1>Entity: {params.entityId}</h1>
      </>
    )
  }



  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}>
            <AppLayout setIsAuthenticated={setIsAuthenticated} currentUser={currentUser} roles={currentUser.roles}/>
          </ProtectedRoute>}>
            <Route index element={<Navigate to="home"/>}/>
            <Route path="home" element={<Home currentUser={currentUser} />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<h1>About</h1>}/>
            <Route path="/contact" element={<h1>Contact</h1>}/>
            <Route path="/entities" element={<Entities currentUser={currentUser} />}>
              <Route index element={<h1>All entities</h1>}/>
              <Route path=":entityId" element={<Entity/>} />
            </Route>
            </Route>
            <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
            <Route path="/logout" element={<Logout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/>}/> 
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
