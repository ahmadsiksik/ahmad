import React from 'react'
import { useState } from 'react';

export const Cart1 = () => {
    const[Close,useClose]=useState(true)
    const Name = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const donation_date = date.current.value;
    }

    const Update = async() => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/donor/${id}/patch`, {
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
                                        <input type='date' id='date' required  ref={date}/>
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
