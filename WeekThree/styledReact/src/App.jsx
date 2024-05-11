import React, { useState } from "react"
import { BrowserRouter, NavLink, Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { AppLayout } from "./layout/AppLayout"
import { Home } from "./page/Home"
import { PageNotFound } from "./page/PageNotFound"
import { BASE_URL } from "./utils/globalVariables"
import { Register } from "./page/Register"
import { Login } from "./page/Login"



function App() {
  const [currentUser, setCurrentUser] = useState({token: null, username: null});

  const Posts = () => {
    return (
      <>
        <h1>Posts</h1>
        <Outlet/>
      </>
    )
  }

  const Post = () => {
    const params = useParams();
    
    return (
      <>
        <h1>Post: {params.postId}</h1>
      </>
    )
  }


  

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
          <Route element={<AppLayout currentUser={currentUser}/>}>
            <Route index element={<Navigate to="home"/>}/>
            <Route path="home" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<h1>About</h1>}/>
            <Route path="/contact" element={<h1>Contact</h1>}/>
            <Route path="/posts" element={<Posts />}>
              <Route index element={<h1>New Posts</h1>}/>
              <Route path=":postId" element={<Post/>} />
            </Route>
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={() => {
              setCurrentUser({"token": null, "username": null});
              localStorage.clear();
            }}/> 
            <Route path="*" element={<PageNotFound/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
