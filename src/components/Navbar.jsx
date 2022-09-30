import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import axios from "axios";

function NavScrollExample() {

    const [ratesuah, setRatesuah] = useState([]);

    useEffect(() => {
        axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(response => {
                setRatesuah(response.data);
            })
    }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" >Currency converter</Navbar.Brand>
        <ul>
            {ratesuah.map( (item) => {
                    return (
                        <li>{item.ccy} {item.buy} / {item.sale}</li>
                        )
                        

            })}
        </ul>
      </Container>

    </Navbar>
  );
}

export default NavScrollExample;