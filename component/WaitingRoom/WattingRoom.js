import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css'
import classes from './WattingRoom.module.css'
import { data } from './Data.js';
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

          <Form.Select style={{width: '70px'}}>
            <option label={"All"}
              checked={search === "All"}
              value=" "
              onClick={(e) => setSearch(e.target.value)}>All</option>

            <option label={"Morry"}
              checked={search === "Morry"}
              value="Morry"
              onClick={(e) => setSearch(e.target.value)}>Morry</option>

            <option label={"Laverne"}
              checked={search === "Laverne"}
              value="Laverne"
              onClick={(e) => setSearch(e.target.value)}>Laverne</option>
          </Form.Select>
          {/* onChange for search */}
        </Form>
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
        
            {data.filter((item) => {
              return search.toLowerCase() === ' '
                ? item
                : item.first_name.includes(search);
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
              </tr>
            ))}
       
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default WaitingRoom;