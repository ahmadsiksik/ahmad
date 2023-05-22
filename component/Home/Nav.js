import React, { Fragment, useState } from 'react'
import Link from 'next/link';
import classes from './Nav.module.css'
const Nav = (props) => {
  const [Tes,useTes] =useState(true)
  console.log(props.Data);
  const response=props.Data;
  
  // if(response===200){
  //   useTes(false)
  // }    
  
    return  (
    <Fragment>
    <nav className={classes.nav}>
        <ul className={classes.ul}>
                <li className={classes.li}><a href="/"></a></li>
              {Tes&&<li className={classes.li}><Link href="/login/LogInAsDoner">تسجيل الدخول </Link></li>}
                <li className={classes.li}><Link href="/profile">الملف الشخصي</Link></li>
                <li className={classes.li} ><Link href="/WaitinRoom">المتبرعين المتاحين</Link></li>
                <li className={classes.li}><Link href="/">صفحة رئيسية</Link></li>
        </ul>
    </nav>
    </Fragment>
  )
}

export default Nav