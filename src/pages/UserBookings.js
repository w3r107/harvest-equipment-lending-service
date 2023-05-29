import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function UserBookings() {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [farzi, setFarzi] = useState("");
  const [bb, setBB] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
    console.log(bookings);
  }, [farzi]);

  if (user && bookings) {
    const xx = bookings.filter((i) => i.user._id == user._id);
    // console.log(xx);
    // setBB(xx);
  }

  const doThis = async (e) => {
    try {
      const res = await axios.post("/api/bookings/delete", { carid: e });
      setFarzi("x");
      // Redirect(`/booking/:e`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const editIt = (e) => {
    let answer = prompt(
      "Are you sure you want to delete it? If Yes,then please type yes in the boYour will get refund within 3-4 working days"
    );
    if (answer === "yes") doThis(e);
    else console.log("a");
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  // console.log(today.);
  let dd = today.getDate();
  let hh = today.getHours();
  let mn = today.getMinutes();

  let nn = yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mn + ":" + "00";
  let nowDate = new Date(nn);

  // let bookingDate=new Date()

  // console.log(dd, mm, hh, mn, yyyy);
  // console.log(bookings[0]?.bookedTimeSlots.from);

  return (
    <DefaultLayout>
      {loading && <Spinner />}

      <h3 className="text-center mt-2">My Bookings</h3>
      {console.log(user)}
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {/* {bookings
            .filter((o) => o.user._id == user._id)
            .map((val, idx) => {
              console.log(val);
              return <h1>{val.car.name}</h1>;
            })} */}
          {bookings
            ?.filter((o) => o.user._id == user._id)
            .map((booking, idx) => {
              console.log("as");
              let yy1 = booking.bookedTimeSlots.to.split(" ")[2];
              let dd1 = booking.bookedTimeSlots.to.split(" ")[1];
              let xx = booking.bookedTimeSlots.to.split(" ")[0];
              let mn1 = month.indexOf(xx) + 1;
              let hiru = booking.bookedTimeSlots.to.split(" ")[3].split(":")[0];
              let minu = booking.bookedTimeSlots.to.split(" ")[3].split(":")[1];
              let tt =
                yy1 +
                "-" +
                mn1 +
                "-" +
                dd1 +
                " " +
                hiru +
                ":" +
                minu +
                ":" +
                "00";
              let bookDate = new Date(tt);
              {
                console.log(bb);
              }
              return (
                <Row
                  gutter={16}
                  className="bs1 mt-3 text-left"
                  key={booking._id}
                  style={{ backgroundColor: "white", opacity: 0.7 }}
                >
                  <Col lg={6} sm={24}>
                    <p>
                      <b>{booking.car?.name}</b>
                      {/* <b>dsa</b> */}
                    </p>
                    <p>
                      Total hours : <b>{booking.totalHours}</b>
                    </p>
                    <p>
                      Rent per hour : <b>{booking.car?.rentPerHour}</b>
                    </p>
                    <p>
                      Total amount : <b>{booking.totalAmount}</b>
                    </p>
                    <p>
                      Name of The driver : <b>{booking.car?.nameOfDriver}</b>
                    </p>

                    <p>
                      Contact number : <b>{booking.car?.phoneNo}</b>
                    </p>
                  </Col>
                  <Col lg={12} sm={24}>
                    {booking.transactionId ? (
                      <p>
                        Transaction Id : <b>{booking.transactionId}</b>
                      </p>
                    ) : (
                      <p>
                        Transaction Id :<b> Your order is COD</b>
                      </p>
                    )}

                    <p>
                      From: <b>{booking.bookedTimeSlots.from}</b>
                    </p>
                    <p>
                      To: <b>{booking.bookedTimeSlots.to}</b>
                    </p>
                    <p>
                      Date of booking:{" "}
                      <b>{moment(booking.createdAt).format("MMM DD yyyy")}</b>
                    </p>
                    <p>
                      Name of The Shop : <b>{booking.car?.nameOfShop}</b>
                    </p>
                    <p>
                      Phone of The Shop : <b>{booking.car?.phoneNoShop}</b>
                    </p>
                  </Col>
                  <Col lg={6} sm={24} className="text-right">
                    <img
                      style={{ borderRadius: 5 }}
                      src={booking.car?.image}
                      height="140"
                      className="p-2"
                    />
                  </Col>
                  {/* 
                  {
                    (isLarger =
                      new Date("2-11-2012 13:40:00") >
                      new Date("01-11-2012 10:40:00"))
                  } * /}
                  {b}
                  {/* {console.log(booking.bookedTimeSlots.from.split(" ")[3])} */}
                  {console.log(bookDate, nowDate)}
                  {bookDate > nowDate ? (
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => editIt(booking._id)}
                    >
                      Delete
                    </button>
                  ) : (
                    <div>
                      <button className="btn btn-bg-danger-subtle disabled">
                        Delete
                      </button>
                    </div>
                  )}
                  {/* <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => editIt(booking._id)}
                  >
                    Delete
                  </button> */}
                </Row>
              );
            })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
