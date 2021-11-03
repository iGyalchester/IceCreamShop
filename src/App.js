import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Button, Table } from "react-bootstrap";
import Van from "../src/Images/van.png";
import Straw from "../src/Images/straw.png";
import Choc from "../src/Images/mint.png";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(0);
  const [joke, setJoke] = useState("");

  const price = 6;
  const price0 = 8;
  const price1 = 10;

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("You cannot order more than 10 Vanilla Ice Cream");
    }
    getJoke();
  };

  const increment0 = () => {
    if (count0 < 10) {
      setCount0(count0 + 1);
    } else {
      alert("You cannot order more than 10 Strawberry Ice Cream!");
    }
    getJoke();
  };

  const increment1 = () => {
    if (count1 < 10) {
      setCount1(count1 + 1);
    } else {
      alert("You cannot order more than 10 Chocolate Ice Cream!");
    }
    getJoke();
  };

  const decrement = () => {
    if (count === 0) {
      setCount(0);
      alert("You cannot buy less than 0 items!");
    } else {
      setCount(count - 1);
    }
    getJoke();
  };

  const decrement0 = () => {
    if (count0 === 0) {
      setCount0(0);
      alert("You cannot buy less than 0 items!");
    } else {
      setCount0(count0 - 1);
    }
    getJoke();
  };

  const decrement1 = () => {
    if (count1 === 0) {
      setCount1(0);
      alert("You cannot buy less than 0 items!");
    } else {
      setCount1(count1 - 1);
    }
    getJoke();
  };

  const getJoke = useCallback(() => {
    const fetchData = async () => {
      const result = await axios("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(result.data.joke);
    };
    fetchData();
  }, []);

  //show person only after button is clicked

  const message = count === 0 ? "No Vanilla Ice Cream Today" : "Enjoy your Vanilla Ice Cream!";
  const message0 = count0 === 0 ? "No Strawberry Ice Cream Today" : "Enjoy your Strawberry Ice Cream!";
  const message1 = count1 === 0 ? "No Chocolate Ice Cream Today" : "Enjoy your Chocolate Ice Cream!";

  return (
    <div>
      <header>
        <h1>
          <p style={{ textAlign: "center" }}>Ice Cream Shop</p>
        </h1>
      </header>
      <div>
        <h1>
          <p>You have {count + count0 + count1} in your cart!</p>
        </h1>
      </div>
      <div>
        <h1>{joke}</h1>
      </div>
      <div className="container">
        <div className="container-1">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={Van} alt="Vanilla pic" width="20" height="20" />
                </td>
                <td>Vanilla</td>
                <td>ICS</td>
                <td>$6</td>
                <td>
                  {" "}
                  <div className="container">
                    <Button variant="danger" active onClick={decrement}>
                      -
                    </Button>
                    <input type="text" value={count} />
                    <Button variant="info" onClick={increment}>
                      +
                    </Button>{" "}
                  </div>
                </td>
                <td>{message}</td>
              </tr>
              <br />
              <tr>
                <td>
                  <img src={Straw} alt="Strawberry pic" width="20" height="20" />
                </td>
                <td>Strawberry</td>
                <td>ICS</td>
                <td>$8</td>
                <td>
                  {" "}
                  <div className="container">
                    <Button variant="danger" onClick={decrement0}>
                      -
                    </Button>
                    <input type="text" value={count0} />
                    <Button variant="info" onClick={increment0}>
                      +
                    </Button>{" "}
                  </div>
                </td>
                <td>{message0}</td>
              </tr>
              <br />
              <tr>
                <td>
                  <img src={Choc} alt="Chocolate pic" width="20" height="20" />
                </td>
                <td>Chocolate</td>
                <td>ICS</td>
                <td>$10</td>
                <td>
                  {" "}
                  <div className="container">
                    <Button variant="danger" onClick={decrement1}>
                      -
                    </Button>
                    <input type="text" value={count1} />
                    <Button variant="info" onClick={increment1}>
                      +
                    </Button>{" "}
                  </div>
                </td>
                <td>{message1}</td>
              </tr>
              <br />
            </tbody>
          </Table>
        </div>
        <p>Your total is: &nbsp;$ {count * price + count0 * price0 + count1 * price1}</p>
      </div>
    </div>
  );
};

export default App;
