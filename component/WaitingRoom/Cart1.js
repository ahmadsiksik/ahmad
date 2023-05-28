import React, { Fragment, useRef } from 'react'
import { useState } from 'react';
import classes from '../Profile/Cart.module.css';

export const Cart1 = () => {
    const[Close,useClose]=useState(true)
    const[Temp,useTemp]=useState()
    const MyID=localStorage.getItem('MyID')
    const Donation_date = useRef();
    


    const submitHandler = (event) => {
        event.preventDefault();
        const donation_date = Donation_date.current.value;
        useTemp(donation_date);
    }

    const Update = async() => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/donations/${MyID}/patch/`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(Temp),
            });
      
            if (response.ok) {
                alert('تم تحديث البيانات بنجاح!');
            } else {
              alert('فشل في تحديث البيانات.');
            }
          } catch (error) {
            alert('حدث خطأ في إرسال البيانات:', error);
          }
        };

        const Cloose = () => {
            useClose(false);
        };
    
      
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
                                        <label htmlFor='date'>التاريخ</label>
                                        <input type='date' id='date' required  ref={Donation_date}/>
                                    </div>
                              
                                    <div className={classes.actions}>
                                    <button className={classes.button} onClick={Update}>Done</button>
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
