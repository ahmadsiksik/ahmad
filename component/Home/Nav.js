import React, { Fragment } from 'react'
import Link from 'next/link';
import classes from './Nav.module.css'
const Nav = () => {
    return  (
    <Fragment>
    <nav className={classes.nav}>
        <ul className={classes.ul}>
                <li className={classes.li}><a href="/"></a></li>
                <li className={classes.li}><Link href="/LogIn">تسجيل الدخول </Link></li>
                <li className={classes.li}><Link href="/profile">الملف الشخصي</Link></li>
                <li className={classes.li} ><Link href="/WaitinRoom">المتبرعين المتاحين</Link></li>
                <li className={classes.li}><Link href="/">صفحة رئيسية</Link></li>
        </ul>
    </nav>
    </Fragment>
  )
}

export default Nav