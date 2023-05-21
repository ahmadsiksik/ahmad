import React, { useCallback, useEffect } from 'react'
import classes from "./Profile.module.css"
import Nav from '../Home/Nav';
import { useState } from 'react';
import Cart from './Cart';
const Profile = (props) => {
  const[Show,useShow]=useState(false)
  const[Donor,setDonor]=useState([])
  const[Error,setError]=useState([])
  console.log(Show);


  const Click=()=>{
    useShow(true);
  }
  


  return (
    <div>
      <Nav/>
      <div className={classes.card}>
        <p className={classes.title}>YOUR NAME : {}</p>
        <p className={classes.title}>YOUR AGE : {}</p>
        <p className={classes.title}>YOUR BLOOD TYPE : {}</p>
        <p className={classes.title}>YOUR LOCATION : {}</p>
        <p className={classes.title}>ARE U SMOKING : {}</p>
        <button className={classes.button} onClick={Click}>تعديل </button>
        <button className={classes.button} onClick={Click}>حذف</button>
        {Show&&<Cart/>}
        
      </div>
    </div>
  )
}
export default Profile