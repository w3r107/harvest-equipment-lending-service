import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsActions";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { Col, Row, Divider, DatePicker, Checkbox, Input, Button } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import FormItem from "antd/lib/form/FormItem";
const { RangePicker } = DatePicker;
function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const [city, setCity] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();
  const [yy, setYY] = useState([]);

  const zzz = [];

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  useEffect(() => {
    setTotalcars(cars);
    setTimeout(() => {
      const letters = new Set([]);

      totalCars.map((val, idx) => {
        letters.add(val.city);
      });
      letters.forEach((val) => {
        zzz.push(val);
      });
      setAllCities(zzz);
    }, 0);
  }, [totalCars, cars, yy]);

  //   function setFilter(values) {
  //     var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
  //     var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");
  //     var temp = [];
  //     for (var car of cars) {
  //       if (car.bookedTimeSlots.length == 0) {
  //         temp.push(car);
  //       } else {
  //         for (var booking of car.bookedTimeSlots) {
  //           if (
  //             selectedFrom.isBetween(booking.from, booking.to) ||
  //             selectedTo.isBetween(booking.from, booking.to) ||
  //             moment(booking.from).isBetween(selectedFrom, selectedTo) ||
  //             moment(booking.to).isBetween(selectedFrom, selectedTo)
  //           ) {
  //           } else {
  //             temp.push(car);
  //           }
  //         }
  //       }
  //     }
  //     setTotalcars(temp);
  //   }

  //   function setCity(values){
  //     var desireCity=values;
  //     var temp=[];
  //     for (var car of cars){
  //         if(car.city == )
  //     }
  //   }

  const onSubmit = (event) => {
    event.preventDefault();
    const lowerCity = city.toLowerCase();
    const xx = totalCars?.filter((car) => {
      return car.city.toLowerCase() === lowerCity;
    });
    console.log(city);

    setYY(xx);
    setTotalcars(xx);
  };

  return (
    <DefaultLayout>
      <Container>
        <div className="mt-3 fs-1 container">
          <div className="row">
            <div className="col" lg={20}>
              {/* <form onSubmit={onSubmit}>
                <div class="mb-3">
                  <label className="form-label">
                    Enter your City:
                    <input
                      type="text"
                      value={city}
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                  <input className="form-control" type="submit" />
                </div>
              </form> */}
              <form>
                <Form.Select
                  aria-label="Default select example"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {allCities?.map((val, idx) => {
                    return (
                      <option key={idx} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </Form.Select>
                <Button onClick={onSubmit}>Submit</Button>
              </form>
            </div>
          </div>
        </div>
        {loading == true && <Spinner />}

        {/* <Row justify="center" gutter={16}>
        {filtered?.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />

                <div className="car-content  align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name}</p>
                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                    <p> Name of the shop {car.nameOfShop} /-</p>
                    <p> Address {car.address} /-</p>
                    <p> City {car.city} /-</p>
                  </div>

                  <div>
                    <button className="btn1 mr-2">
                      <Link to={`/booking/${car._id}`}>Book Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row> */}

        {/* <Row justify="center" gutter={16}>
        {yy?.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />

                <div className="car-content  align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name}</p>
                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                    <p> Name of the shop {car.nameOfShop} /-</p>
                    <p> Address {car.address} /-</p>
                    <p> City {car.city} /-</p>
                  </div>

                  <div>
                    <button className="btn1 mr-2">
                      <Link to={`/booking/${car._id}`}>Book Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row> */}

        <Row>
          {console.log(yy)}
          {yy?.map((car) => {
            return (
              <Card style={{ width: "25rem" }} className="mr-4">
                <Card.Img
                  variant="top"
                  style={{ height: "300px" }}
                  src={car.image}
                />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>
                    <div>Rent per Hour :{car.rentPerHour}</div>
                    <div>Name of the Shop :{car.nameOfShop}</div>
                    <div>Address of the shop :{car.address}</div>
                    <div>City-{car.city}</div>
                  </Card.Text>
                  <button className="btn1 mr-2">
                    <Link to={`/booking/${car._id}`}>Book Now</Link>
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default Home;
