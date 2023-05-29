import React, { Fragment, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../Home/Nav';
import CartDonation from './CartDonation'
import { useEffect } from 'react';
import { useRef } from 'react';
import classes from '../Profile/Cart.module.css';

function WaitingRoom(props){
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [Show, setShow] = useState(false);
    const [Close, setClose] = useState(true);
    const Donation_date = useRef('');


    const [Temp, setTemp] = useState('');
    const myData1 = localStorage.getItem('myData1');
    const Data = localStorage.getItem('Data');
    let response;
console.log(myData1,Data);
    const submitHandler =async (event) => {
        event.preventDefault();
        const Templ = {
            donation_date : Donation_date.current.valueOf,
            hospital_id: myData1,
            donor_id: Data,
            will_donate: false,
        };
        setTemp(Templ);
        console.log(Temp);
        AddDonation();
    };

    const Cloose = () => {
        setClose(false);
        setShow(false);     
    };

    const AddDonation = async () => {
        try {
            response = await fetch('http://127.0.0.1:8000/donations/create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Temp),
            });

            if (response.ok) {
                alert('تم الإضافة بنجاح');
            } else {
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
    setShow(false)
      fetchData();
    },[]);


    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/donor/'); // استبدال الرابط برابط API الخاص بك
        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        alert('حدث خطأ في جلب البيانات:', error);
      }
    };


    const PostData=()=>{
        setShow(true)
    }

    console.log(Show);


    const Passowrd = useRef();
    const Identifier = useRef();



    const DonerLogin = (event) => {
        event.preventDefault()

        const DonorLog = {
            identifier: Identifier.current.value,
            password: Passowrd.current.value,
        }
        props.onAddDonorLog(DonorLog);
    }
    

    // const sortName = () => {
    //   setContacts(
    //     data.sort((a, b) => {
    //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
    //         ? -1
    //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
    //         ? 1
    //         : 0;
    //     })
    //   );
    // };


    return (
        <div className={classes.all}>
            <Nav />

            <Container>

                <br />
                <div className={classes.main}>
                <div className={classes.overlay}>
                    <div className={classes.content}>
                        <Nav />
                        <section className={classes.auth}>
                            <h1>{' فلتره المتبرعين '}</h1>
                            <form >
                                <div className={classes.control}>
                                    <label htmlFor="Identifier">عدد الوحدات المطلوبه </label>
                                    <input type='text' id='identifier' required ref={Identifier} />
                                </div>

                                <div className={classes.control}>
                                    <label htmlFor='Passowrd'>زمرة الدم </label>
                                    <input
                                        type='password'
                                        id='password'
                                        required
                                        ref={Passowrd}
                                    />
                                </div>

                                <div className={classes.control}>
                                    <label htmlFor='Passowrd'>موعد التبرع</label>
                                    <input
                                        type='password'
                                        id='password'
                                        required
                                        ref={Passowrd}
                                    />
                                </div>


                                <div className={classes.control}>
                                    <label htmlFor='Passowrd'>المكان</label>
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
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>الاسم الاول</th>
                            <th>الاسم الاخر</th>
                            <th>البريد الالكتروني</th>
                            <th>رقم الهاتف</th>
                            <th>العنوان</th>
                            <th>زمره الدم</th>
                            <th>احتمالية التبرع </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                        
                        data.filter((item) => {
                            return search.toLowerCase() === ' '
                                ? item
                                : item.blood_group.includes(search);
                        }).map((item, index) => (
                            <tr key={index}>
                                
                                <td>
                                    {item.user__first_name}
                                </td>
                                <td>

                                    {item.user__last_name}
                                </td>
                                <td>

                                    {item.user__email}
                                </td>
                                <td>

                                    {item.mobile_number}
                                </td>
                                <td>

                                    {item.city}
                                </td>
                                <td>

                                    {item.blood_group}
                                </td>
                                <td>

                                    {item.prediction}
                                </td>
                                <td>
                                    <button onClick={PostData}>الاستدعاء</button>
                                </td>
                            </tr>
                        ))}
            {Show && <Fragment>
                <div className={classes.main}>
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <section className={classes.auth}>
                                <form >
                                    <div className={classes.control}>
                                        <label htmlFor='date'>موعد التبرع </label>
                                        <input type='date' id='date' required ref={Donation_date} />
                                    </div>

                                    <div className={classes.actions}>
                                        <button type='submit' className={classes.button} onClick={submitHandler}>
                                            Done
                                        </button>
                                        <button type='button' className={classes.button} onClick={Cloose}>
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                </Fragment>}

                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default WaitingRoom;     
