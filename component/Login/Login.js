import Link from 'next/link';
import Nav from '../Home/Nav';
import classes from './Login.module.css'
import React, { Fragment, useRef, useState } from 'react'


export const Login = (props) => {
    const Passowrd = useRef();
    const Identifier=useRef();

    const LoginHandler = async () => {    
    const DonorLog = {
        identifier: Identifier.current.value,
        password : Passowrd.current.value,
    }
    props.onAddDonorLog(DonorLog);
         
}




    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>
            <Nav/>

                            <section className={classes.auth}>
                                <h1>{'تسجيل الدخول '}</h1>
                                <form >
                                    <div className={classes.control}>
                                        <label htmlFor="identifier">البريد الالكتروني</label>
                                        <input type='text' id='identifier' required ref={Identifier}  />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='password'>كلمة السر</label>
                                        <input
                                            type='password' 
                                            id='password'
                                            required  
                                            ref={Passowrd}
                                        />
                                    </div>
                                    
                                    <div className={classes.actions}>
                                    {(
                                           <button onClick={LoginHandler}><Link href={'/'}>تسجيل الدخول</Link></button>
                                    )}
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                            
                                        >
                                            <Link href={'/SignUp'}>
                                            {'انشاء حساب'}
                                            
                                            </Link>
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
    
    };