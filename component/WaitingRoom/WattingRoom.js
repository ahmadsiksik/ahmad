import React, { Fragment, useState,useRef } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css'
import classes from '../Profile/Cart.module.css';
import Nav from '../Home/Nav';
import { useEffect } from "react";

function WaitingRoom(props) {
  const [search, setSearch] = useState('');
  const [Show, setShow] = useState(false);
  const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const[Close,useClose]=useState(true)
    const[Temp,useTemp]=useState('')
    const MyID=localStorage.getItem('MyID')
    const Donation_date = useRef();
    


    const submitHandler = (event) => {
        event.preventDefault();
        const donation_date = Donation_date.current.value;
        useTemp(donation_date);
        Update();
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
          setShow(false);
        };
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/donations/'); // استبدال الرابط برابط API الخاص بك
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        alert('حدث خطأ في جلب البيانات:', error);
      }
    };

    const deleteData = async (id) => {
      
      try {
        const response = await fetch(`http://127.0.0.1:8000/donations/${id}/delete/`, {
          method: 'DELETE',
        });
        if (response.ok) {
          const responseData = await response.json();
          alert('Deleted successfully:', responseData);
        } else {
          throw new Error('Failed to delete donor');
        }
      } catch (error) {
        alert('Error deleting data:', error.message);
      }
      fetchData();
    };
    const updata=(id)=>{
      localStorage.setItem('MyID',id)
      setShow(true);
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
              onClick={(e) => setSearch(e.target.value)}>B-</option>

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
              <th>رقم المستشفى</th>
              <th>رقم اللتبرع</th>
              <th>تاريخ الموعد</th>
              <th>هل سوف يتبرع </th>
            </tr>
          </thead>
          <tbody>

            {data.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.includes(search);
            }).map((item, index) => (
              <tr key={index}>
                <td>
                  {item.donor__id}
                </td>
                <td>

                  {item.hospital__id}
                </td>
                <td>

                  {item.donation_date}
                </td>
                <td>

                  {item.will_donate}
                </td>
    
                <td>

                  <button onClick={()=>{deleteData(item.id)}}>حذف</button>
                </td>
                <td>

                  <button onClick={()=>{updata(item.id)}}>تعديل</button>
                </td>

              </tr>
            ))}
            {Show&&<Fragment>
              <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>

                            <section className={classes.auth}>
                                <h1>{'تعديل  '}</h1>
                                <form>
                                  
                                    <div className={classes.control}>
                                        <label htmlFor='date'>التاريخ</label>
                                        <input type='date' id='date' required  ref={Donation_date}/>
                                    </div>
                              
                                    <div className={classes.actions}>
                                    <button className={classes.button} onClick={submitHandler}>Done</button>
                                    <button className={classes.button} onClick={Cloose}>Close</button>
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