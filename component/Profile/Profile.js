import React, { useCallback, useEffect } from 'react'
import classes from "./Profile.module.css"
import Nav from '../Home/Nav';
import { useState } from 'react';
import Cart from './Cart';
const Profile = (props) => {
  const[Show,useShow]=useState(false)
  const[Donor,setDonor]=useState([])
  const[Error,setError]=useState([])
  const [data, setData] = useState(null);

  console.log(Show);


  const Click=()=>{
    useShow(true);
  }

  
  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('حدث خطأ في جلب البيانات:', error);
    }
  };


  
  const deleteData = async (id) => {
    try {
      const response = await axios.delete("https://e03c-83-244-2-162.ngrok-free.app/donor/18/delete/");
      console.log('Deleted successfully:', response.data);

    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <Nav/>
      <div className={classes.card}>
      <p className={classes.title}>الأسم : {}</p>
        <p className={classes.title}>العمر : {}</p>
        <p className={classes.title}>الوزن : {}</p>
        <p className={classes.title}>مدخن ام لا : {}</p>
        <p className={classes.title}>اخر شهر تم التبرع فيه : {}</p>
        <p className={classes.title}>اول شهر تم التبرع فيه  : {}</p>
        <p className={classes.title}>الجنس : {}</p>
        <p className={classes.title}>الكميه التي تم التبرع فيها في حياته : {}</p>
        <p className={classes.title}>العنوان : {}</p>

        <button className={classes.button} onClick={Click}>تعديل </button>
        <button className={classes.button} onClick={Click}>حذف</button>
        {Show&&<Cart/>}
        
      </div>
    </div>
  )
}
export default Profile