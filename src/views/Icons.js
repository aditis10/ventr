/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">My Files</CardTitle>
                <p className="card-category">
                  A safe and secure cloud-based space
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    <ul>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Marketing</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Partnerships</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>External Affairs</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Events</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Social Media</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Backend</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Documents</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Team</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Data</p>
                      </li>
                      <li>
                        <img src={require("assets/img/blue.png").default}/>
                        <p>Hiring</p>
                      </li>
                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;