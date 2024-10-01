import React from 'react'
import { useState } from 'react';
import "./login.css"

export const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);


    const submitform=()=>{
        const newentry={email:email , password:password};
        setAllEntry([...allEntry,newentry]);
        console.log(allEntry);
        }
      return (
    <>
    <div className="container">

    <form action="" onSubmit={submitform} className="form">
<div>
    <label htmlFor="email">Email </label>
    <input type="text" name="email" id="email"  autoComplete='off' value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />

</div>
<div>
    <label htmlFor="password">password </label>
    <input type="text" name="password" id="password"  autoComplete='off' value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

</div>
<button type='submit'>Login</button>

    </form>
    </div>
    </>
  )
}
