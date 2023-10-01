import React from 'react'
import { useState } from 'react';
import "./login.css"

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const submitform=()=>{
    // handle submit logic here
  }

  return (
    <>
    <div className="container">
    <form action="" onSubmit={submitform} className="form">
      <div>
        <label htmlFor="email">Username</label>
        <input type="text" name="username" id="username"  autoComplete='off' value={username}
         onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input type="text" name="email" id="email"  autoComplete='off' value={email}
         onChange={(e)=>setEmail(e.target.value)}/>
      </div>
     <div>
        <label htmlFor="password">password </label>
        <input type="text" name="password" id="password"  autoComplete='off' value={password}
           onChange={(e)=>setPassword(e.target.value)}/>
      </div>
     <button type='submit'>Login</button>
    </form>
    </div>
    </>
  )
}
