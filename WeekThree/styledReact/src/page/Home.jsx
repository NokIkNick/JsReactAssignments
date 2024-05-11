import React from 'react'



export const Home = ({currentUser}) => {
  return (
    <>
      <div>
        <h1>Home</h1>
        {currentUser && currentUser.username !== null ? <h2>Welcome, {currentUser.username}</h2> : <h2>Welcome, Guest</h2>}
      </div>
    </>
  )
}
