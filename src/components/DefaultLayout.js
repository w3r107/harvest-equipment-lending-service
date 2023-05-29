import React, { useEffect } from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "../pages/PreHomePage.css";
import axios from "axios";

function DefaultLayout(props) {
  const helper = async () => {
    try {
      const response = await axios.get("/api/users/allUser");
      console.log(response);
    } catch (e) {
      console.log("asa");
      console.log(e);
    }
  };
  useEffect(() => {
    helper();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      {user.username === "user1" || "user2" ? (
        <Menu.Item>
          <a href="/admin">Admin</a>
        </Menu.Item>
      ) : (
        <></>
      )}

      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="hi">
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/" style={{ color: "orangered" }}>
                    FARM-X
                  </Link>
                </b>
              </h1>

              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
        <hr />

        <p>Desinged and Developed By</p>

        <p>FARM-X</p>
      </div>
    </div>
  );
}

export default DefaultLayout;
