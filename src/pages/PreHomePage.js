import { Button } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import "./PreHomePage.css";

const home = () => {
  // window.location.href = "/";
};

const PreHomePage = () => {
  return (
    <>
      <div>
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
              </div>
            </Col>
          </Row>
        </div>
        <div className="container farmerContainer">
          <h1 className="title">FARMER</h1>
          <h4 className="farmer-title">
            If you are a farmer then you are at perfect platfrom from where you
            can hire all of your farming related machines and make your
            equipment available for hiring.
          </h4>
          {/* <div className="row row-one justify">
          <div className="card-deck">
            <div className="card" border="primary" style={{ width: "25rem" }}>
              <div className="card-body">
                <div className="card-titile card-title ">
                  Rent Tractor, harvester , Roller and more...
                </div>
                <Button onClick={home} style={{ fontSize: "30px" }}>
                  Let's Hire
                </Button>
              </div>
            </div>
          </div>
        </div>
       */}
          <Card>
            <Card.Img
              variant="top"
              src="https://www.theindiaforum.in/sites/default/files/styles/cover_story/public/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg"
            />
            {/* <Button
            onClick={home}
            style={{ height: "60px", fontSize: "30px" }}
            className="ok"
          >
            Let's Hire
          </Button> */}
            <Link to="/" style={{ height: "60px", fontSize: "30px" }}>
              Let's Hire
            </Link>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PreHomePage;
