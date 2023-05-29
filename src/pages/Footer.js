import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DefaultLayout from "../components/DefaultLayout";

// <div className="ok" style={{ backgroundColor: "black", color: "white" }}>
//   <Row>
//     <Col style={{ display: "flex", flex: "col" }}>
//       Farm-X If you are a farmer then you are at perfect platfrom from where
//       you can hire all of your farming related machines and make your
//       equipment available for hiring.If you are a farmer then you are at
//       perfect platfrom from where you can hire all of your farming related
//       machines and make your equipment available for hiring.If you are a
//       farmer then you are at perfect platfrom from where you can hire all of
//       your farming related machines and make your equipment available for
//       hiring.
//     </Col>
//     <Col style={{ display: "flex", flexDirection: "column" }}>
//       Links
//       <Link>Farmer</Link>
//       <Link>Farmer</Link>
//       <Link>Farmer</Link>
//     </Col>
//     <Col style={{ display: "flex", flexDirection: "column" }}>
//       Contact us
//       <p>India</p>
//       <p>email</p>
//       <p>phone no.</p>
//     </Col>
//     <Col style={{ display: "flex", flexDirection: "column" }}>
//       {" "}
//       <p>Get in touch</p>
//       <div>
//         <Form>
//           <div>
//             <Form.Group className="mb-1" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 style={{ width: "200px" }}
//               />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>
//           </div>
//           <div>
//             <Form.Group className="mb-1">
//               <Form.Label>Comment</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Leave a comment here"
//                 style={{ width: "200px" }}
//               />
//             </Form.Group>
//           </div>
//           button send message{" "}
//         </Form>
//       </div>
//     </Col>
//   </Row>
// </div>
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", color: "white", width: "100%" }}>
      <Container>
        <Row>
          <Col>
            <h5 style={{ color: "white" }}>FARM-X</h5>
            <div>
              The purpose of Farm-x is to provide connections between different
              roles in the agriculture industry. As the farmers are not getting
              a fair price for their goods because of contractors. This app
              removes the requirement of contractors for farmers. Farmers can
              buy their required needs for farming from Sellers and they can
              also sell their products to the Consumers
            </div>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>Links</h5>
            <div>Farmer</div>
            <div>krishi site</div>
            <div>Ek aur</div>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>Contact us</h5>
            <div>Tushar Kumar</div>
            <div>tushar.kumar9179@gmail.com</div>
            <div>+91 9045730781</div>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>Contact Us</h5>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
