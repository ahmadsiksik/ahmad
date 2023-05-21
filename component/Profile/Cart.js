import { Fragment, useState } from 'react';
import classes from './Cart.module.css';
import { useRef } from 'react';
import Link from 'next/link';

const Cart = (props) => {
    const[Close,useClose]=useState(true)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email: enteredEmail,
        //         password: enteredPassword,
        //         returnSecureToken: true,
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
    }
    const Cloose = () => {
        useClose(false);
    }



    return (
        <Fragment>
         {Close&&
            <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>

                            <section className={classes.auth}>
                                <h1>{'تعديل  '}</h1>
                                <form onSubmit={submitHandler}>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>الاسم الكامل</label>
                                        <input type='text' id='text' required  ref={emailInputRef}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='number'>رقم الجوال </label>
                                        <input
                                            type='number' 
                                            id='number'
                                            required  
                                            ref={emailInputRef}      
                                        />
                                    </div>
                                    
                                    <div className={classes.actions}>
                                    <button className={classes.button} onClick={Cloose}>Done</button>
                                    <button className={classes.button} onClick={Cloose}>Close</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            }
        </Fragment>

    );
}

export default Cart;