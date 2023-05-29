import React, { Fragment, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../Home/Nav';  
import { useEffect } from 'react';
import { useRef } from 'react';
import classes from '../Profile/Cart.module.css';

function PaindingRoom(props){
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

                <h1 className='text-center mt-4'>المتبرعين المتاحين </h1>
                <Form>

                    <Form.Select style={{ width: '70px' }}>
                        <option label={"All"}
                            checked={search === "All"}
                            value=" "
                            onClick={(e) => setSearch(e.target.value)}>All</option>

                        <option label={"A+"}
                            checked={search === "A+"}
                            value="A+"
                            onClick={(e) => setSearch(e.target.value)}>A+</option>

                        <option label={"A-"}
                            checked={search === "A-"}
                            value="A-"
                            onClick={(e) => setSearch(e.target.value)}>A-</option>

                        <option label={"B+"}
                            checked={search === "B+"}
                            value="B+" 
                            onClick={(e) => setSearch(e.target.value)}>B+</option>

                        <option label={"B-"}
                            checked={search === "B-"}
                            value="B-"
                            onClick={(e) => setSearةch(e.target.value)}>B-</option>

                        <option label={"AB+"}
                            checked={search === "AB+"}
                            value="AB+"
                            onClick={(e) => setSearch(e.target.value)}>AB+</option>

                        <option label={"AB-"}
                            checked={search === "AB-"}
                            value="AB-"
                            onClick={(e) => setSearch(e.target.value)}>AB-</option>

                        <option label={"O+"}
                            checked={search === "O+"}
                            value="O+"
                            onClick={(e) => setSearch(e.target.value)}>O+</option>

                        <option label={"O-"}
                            checked={search === "O-"}
                            value="O-"
                            onClick={(e) => setSearch(e.target.value)}>O-</option>
                    </Form.Select>
                    {/* onChange for search */}
                </Form>
                <br />

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

export default PaindingRoom;     
