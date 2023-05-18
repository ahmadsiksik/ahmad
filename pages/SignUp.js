import { Fragment } from 'react'
import { Regester } from '../component/Regester/Regester'
import { useState } from 'react';
export default function SignUp() {
  const [signupData, setSignupData] = useState([]);
  const[Error,setError]=useState([])
  async function handleSignup(Donor) {
    console.log(Donor);
   
    try {
        const response = await fetch("https://d466-83-244-77-29.ngrok-free.app/donor/signup/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Donor),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
    return (
      <Fragment>
        <Regester onAdd={handleSignup}/>
      </Fragment>
    )
};