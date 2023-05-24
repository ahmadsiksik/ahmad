import { Fragment, useState } from 'react';
import classes from './Cart.module.css';
import { useRef } from 'react';
import Link from 'next/link';

const Cart = (props) => {
    const[Close,useClose]=useState(true)
    const Name = useRef();
    const Age = useRef();
    const Weight = useRef();
    const Gender = useRef();
    const Is_Smoker = useRef();
    const Last_Donation_Months = useRef();
    const First_Donation_Months = useRef();
    const No_Donation = useRef();
    const Address = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const Temp={
         name : Name.current.value,
         age : Age.current.value,
         weight : Weight.current.value,
         gender : Gender.current.value,
         is_smoker : Is_Smoker.current.value,
         last_donation_months : Last_Donation_Months.current.value,
         first_donation_months : First_Donation_Months.current.value,
         no_donation : No_Donation.current.value,
         address : Address.current.value,
        }
    }

    const Cloose = () => {
        useClose(false);
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
      
        useClose(false);


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
                                        <input type='text' id='text' required  ref={Name}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='number'>العمر</label>
                                        <input
                                            type='number' 
                                            id='number'
                                            required  
                                            ref={Age}      
                                        />
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='number'>الوزن </label>
                                        <input type='number' id='number' required  ref={Weight}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>الجنس</label>
                                        <input type='text' id='text' required  ref={Gender}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>مدخن ام لا</label>
                                        <input type='text' id='text' required  ref={Is_Smoker}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>اخر شهر تم التبرع فيه</label>
                                        <input type='date' id='text' required  ref={Last_Donation_Months}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>اول شهر تم التبرع فيه</label>
                                        <input type='date' id='text' required  ref={First_Donation_Months}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='number'>الكميه التي تم التبرع فيها في حياته</label>
                                        <input type='number' id='number' required  ref={No_Donation}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>العنوان</label>
                                        <input type='text' id='text' required  ref={Address}/>
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

export default Cart;