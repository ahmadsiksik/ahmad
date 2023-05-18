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
  const fetchMoviesHandler = useCallback(async () => {

    try {
      const response = await fetch('https://d466-83-244-77-29.ngrok-free.app/donor/19');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          Username : data[key].username,
          Email : data[key].email,
          National_id : data[key].national_id,
          Password : data[key].password,
          First_name : data[key].first_name,
         //  mobile_numberr : Mobile_number.current.value,
          Last_name : data[key].last_name,
        });
      }

      setDonor(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  console.log(Donor);


  return (
    <div>
      <Nav/>
      <div className={classes.card}>
        <p className={classes.title}>YOUR NAME : {Donor}</p>
        <p className={classes.title}>YOUR AGE : {}</p>
        <p className={classes.title}>YOUR BLOOD TYPE : {}</p>
        <p className={classes.title}>YOUR LOCATION : {}</p>
        <p className={classes.title}>ARE U SMOKING : {}</p>
        <button className={classes.button} onClick={Click}>Edit</button>
        {Show&&<Cart/>}
        
      </div>
    </div>
  )
}
export default Profile