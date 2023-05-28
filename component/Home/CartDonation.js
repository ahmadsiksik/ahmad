import { Fragment, useState, useRef } from 'react';
import classes from '../Profile/Cart.module.css';
import Link from 'next/link';

const Cart = (props) => {
    const [Close, useClose] = useState(true);
    const Donation_date = useRef();
    const [Temp,useTemp] = useState();
    const myData1=localStorage.getItem('myData1')
    const Data = localStorage.getItem('Data');

console.log(Data);
console.log(myData1);

    const submitHandler = (event) => {
        event.preventDefault();
        const Temp1 = {
            hospital_id: myData1,
            donor_id: Data,
            donation_date: Donation_date.current.value,
            will_donate: false,
        };
        useTemp(Temp1)
        console.log(Temp1);

    };



    const Cloose = () => {
        useClose(false);
    };

    const AddDonation = async () => {
        try {
              const response = await fetch("http://127.0.0.1:8000/donations/create/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(Temp),
      
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log(data.donor_id);
            }
      
            if (response.status === 200) {
              alert("تم الاصافه بنجاح");
            } else {
              alert("فشل خطأ الرجاء التحقق من البيانات ");
            }
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <Fragment>
            {Close && (
                <div className={classes.main}>
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <section className={classes.auth}>
                                <form onSubmit={submitHandler}>
                                    <div className={classes.control}>
                                        <label htmlFor='text'>موعد التبرع </label>
                                        <input type='date' id='date' required ref={Donation_date} />
                                    </div>

                                    <div className={classes.actions}>
                                        <button className={classes.button} onClick={AddDonation}>
                                            Done
                                        </button>
                                        <button className={classes.button} onClick={Cloose}>
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Cart;
