import axios from "axios";
import React, { useEffect, useState } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { Redirect } from "react-router-dom";

const AllBooking = () => {
  const [details, setDetails] = useState(null);
  const [naam, setNaam] = useState("");
  let local = "";
  useEffect(() => {
    getD();
  }, []);

  const getD = async () => {
    const { data } = await axios.get("/api/bookings/getallbookings");
    setDetails(data);
    console.log(data[0].user.username);
    console.log(details);
  };
  const handle = () => {
    window.location.href = "/admin";
  };

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });

    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  // const findUserName = (x) => {
  //   axios.get("/");
  // };

  const download = (e) => {
    e.preventDefault();
    let headers = [
      "User,Shop,Driver,Phone_shop,Phone_Driver,Equipment,From,To,Total,Transaction_ID",
    ];
    let usersCsv = details?.reduce((acc, useri) => {
      const bookT = useri?.bookedTimeSlots;
      const car = useri?.car;
      const totalAmount = useri?.totalAmount;
      const x = useri?.user;
      // findUserName(x);
      const user = x;
      const shop = car?.nameOfShop;
      const driver = car?.nameOfDriver;
      const phoneNoShop = car?.phoneNoShop;
      const phoneNo = car?.phoneNo;
      const name = car?.name;
      const from = bookT?.from;
      const to = bookT?.to;
      const total = useri?.totalAmount;
      const transaction_ID = useri.transactionId ? useri.transactionId : "COD";
      // const { x, } = useri;
      acc.push(
        [
          user,
          shop,
          driver,
          phoneNoShop,
          phoneNo,
          name,
          from,
          to,
          total,
          transaction_ID,
        ].join(",")
      );
      return acc;
    }, []);
    downloadFile({
      data: [...headers, ...usersCsv].join("\n"),
      fileName: "users.csv",
      fileType: "text/csv",
    });
  };

  return (
    <>
      <button onClick={handle}>GO BACK</button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Name of shop</th>
            <th scope="col">Name of Driver</th>
            <th scope="col">Phone of shop</th>
            <th scope="col">Phone of driver</th>
            <th scope="col">Equipment</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {console.log(details)}
          {details?.map((d, ind) => {
            const bookT = d.bookedTimeSlots;
            const car = d.car;
            const totalAmount = d.totalAmount;
            const user = d.user.username;
            return (
              <>
                <tr style={{ backgroundColor: "white", opacity: "0.7 " }}>
                  <th scope="row">{ind + 1}</th>
                  <td>{user}</td>
                  <td>{car?.nameOfShop}</td>
                  <td>{car?.nameOfDriver}</td>
                  <td>{car?.phoneNoShop}</td>
                  <td>{car?.phoneNo}</td>
                  <td>{car?.name}</td>
                  <td>{bookT.from}</td>
                  <td>{bookT.to}</td>
                  <td>{totalAmount}</td>
                  <td>{d.transactionId ? d.transactionId : "COD"}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <button type="button" onClick={download}>
        {" "}
        Download data in excel format
      </button>
    </>
  );
};

export default AllBooking;
