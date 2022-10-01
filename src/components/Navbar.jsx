import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function NavScrollExample() {
  const [ratesuah, setRatesuah] = useState([]);

  const url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Currency converter</Navbar.Brand>
        <ul>
          {data.map((item) => {
            return (
              <li key={item.ccy}>
                {item.ccy} {item.buy} / {item.sale}
              </li>
            );
          })}
        </ul>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
