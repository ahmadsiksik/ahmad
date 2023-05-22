import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css'
import classes from '../../component/WaitingRoom/WattingRoom.module.css'
import { data } from '../WaitingRoom/Data';
import Nav from '../Home/Nav';

function WaitingRoom(props) {
    const [search, setSearch] = useState('');

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
                            <th>الاسم الاول</th>
                            <th>الاسم الاخر</th>
                            <th>البريد الالكتروني</th>
                            <th>رقم الهاتف</th>
                            <th>العنوان</th>
                            <th>زمره الدم</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.filter((item) => {
                            return search.toLowerCase() === ' '
                                ? item
                                : item.BloodType.includes(search);
                        }).map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.first_name}
                                </td>
                                <td>

                                    {item.last_name}
                                </td>
                                <td>

                                    {item.email}
                                </td>
                                <td>

                                    {item.phone}
                                </td>
                                <td>

                                    {item.Address}
                                </td>
                                <td>

                                    {item.BloodType}
                                </td>
                                <td>
                                    <button>الاستدعاء</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default WaitingRoom;     