import Link from 'next/link';
import Nav from '../Home/Nav';
import classes from './Login.module.css'
import React, { Fragment, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth';


export const LoginDonor = (props) => {
    const Passowrd = useRef();
    const Identifier=useRef();
    const dispatch = useDispatch();


  
  

    const DonerLogin = (event) => {    
        event.preventDefault()
        dispatch(authActions.loginAsDonor());

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
            <Nav Data={props.Res} />

                            <section className={classes.auth}>
                                <h1>{'تسجيل الدخول '}</h1>
                                <form >
                                    <div className={classes.control}>
                                        <label htmlFor="Identifier">البريد الالكتروني</label>
                                        <input type='text' id='identifier' required ref={Identifier}  />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='Passowrd'>كلمة السر</label>
                                        <input
                                            type='password' 
                                            id='password'
                                            required  
                                            ref={Passowrd}
                                        />
                                    </div>
                                    
                                    <div className={classes.actions}>
                                    {(
                                           <button onClick={DonerLogin}>تسجيل الدخول</button>
                                    )}
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                            
                                        >
                                            <Link href={'/Regester/RegesterAsDoner'}>
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