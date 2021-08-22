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
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
      <Row>
        <Col lg="3" md="6" sm="6">
        <Card>
              <CardHeader>
                <CardTitle tag="h4">Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/user.png")
                                .default
                            }
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Roselyn Huynh (ventr) <br />
                        <span className="text-success">
                          <small>Available</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="default"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
        </Card>
        </Col>
        <Col lg="3" md="6" sm="6">
        <Card>
              <CardHeader>
                <CardTitle tag="h4">New Messages</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="7" xs="7">
                        Amy Jackson (Neufund) <br />
                        <span className="text-info">
                          <small>2 new messages</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="default"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-comments" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
        </Card>
        </Col>
      </Row>
      <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Recommendations</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Location</th>
                      <th className="text-right">Last active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Amy Jackson</td>
                      <td>Neufund</td>
                      <td>Berlin, Germany</td>
                      <td className="text-right">Just now</td>
                    </tr>
                    <tr>
                      <td>Percy Cooper</td>
                      <td>Mambu</td>
                      <td>Berlin, Germany</td>
                      <td className="text-right">Just now</td>
                    </tr>
                    <tr>
                      <td>Sally Smith</td>
                      <td>Remagine</td>
                      <td>Berlin, Germany</td>
                      <td className="text-right">3h ago</td>
                    </tr>
                    <tr>
                      <td>Anjali Johnson</td>
                      <td>RatePay</td>
                      <td>Berlin, Germany</td>
                      <td className="text-right">5h ago</td>
                    </tr>
                    <tr>
                      <td>Priya Kim</td> 
                      <td>BigchainDB</td>
                      <td>Berlin, Germany</td>
                      <td className="text-right">1d ago</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;