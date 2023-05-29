import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link';
import classes from './Nav.module.css'
import { useSelector } from 'react-redux';
const Nav = (props) => {
  const[LoginDonor,setLoginDonor]=useState(false);
  const[LoginHos,setLoginHos]=useState(false);
  const[Nothing,setNothing]=useState(false);
  const[DonorData,setDonordata]=useState('');


  const isAuth = useSelector(state => state.auth.isAuthenticated);
const logout=()=>{
  dispatch(authActions.logout());
}

  useEffect(()=>{
    if(isAuth==="Donor"){
      setLoginDonor(true)
    }
    if(isAuth==="Hos"){
      setLoginHos(true)
    }

    if(isAuth==="No"){
      console.log("hishamaa");
    }


  },);
    return  (
    <Fragment>
    <nav className={classes.nav}>
        <ul className={classes.ul}>
              <li className={classes.li}><a href="/"></a></li>
              {!LoginDonor&&!LoginHos&&<li className={classes.li}><Link href="/login/LogInAsDoner">تسجيل الدخول </Link></li>}
              {(LoginDonor||LoginHos)&&<li className={classes.li}><Link href="/login/LogInAsDoner" onClick={logout}>تسجيل الخروج </Link></li>}
              {(LoginDonor||LoginHos)&&!LoginHos&& <li className={classes.li} ><Link href="/profile">الملف الشخصي</Link></li>}
              {(LoginDonor||LoginHos)&&!LoginDonor &&  <li className={classes.li} ><Link href="/WaitinRoom">قائمة الانظار</Link></li>}
              {(LoginDonor||LoginHos)&&!LoginDonor &&  <li className={classes.li} ><Link href="/Painding">المتبرعين الجدد</Link></li>}
              {(LoginDonor||LoginHos)&&!LoginDonor &&  <li className={classes.li} ><Link href="/HomeHos">المتبرعين المتاحين</Link></li>}
              <li className={classes.li}><Link href="/">الصفحة الرئيسية</Link></li>

              {/* {(LoginDonor||!LoginHos)&&!LoginDonor && <li className={classes.li}><Link href="/">صفحة رئيسية</Link></li>}
              {(LoginDonor||!LoginHos)&&  <li className={classes.li}><Link href="/HomeHos">صفحة رئيسية</Link></li>} */}

        </ul>
    </nav>
    </Fragment>
  )
}

export default Nav
