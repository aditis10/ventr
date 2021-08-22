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
import { Card, CardTitle, Table, CardFooter, CardHeader, CardBody, Row, Col } from "reactstrap";

function Typography() {
  return (
    <>
      <div className="content">
      <Row>
            <Col md="4">
            <Card className="card-stats">
            <CardHeader>
                <CardTitle tag="h4">Payroll History</CardTitle>
              </CardHeader>
              <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th className="text-right">Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Phoebe Lee</td>
                      <td className="text-right">08/11/2021</td>
                    </tr>
                    <tr>
                      <td>Kate Wang</td>
                      <td className="text-right">08/11/2021</td>
                    </tr>
                    <tr>
                      <td>Jessica Liu</td>
                      <td className="text-right">08/11/2021</td>
                    </tr>
                    <tr>
                      <td>Neha Rodriguez</td>
                      <td className="text-right">08/11/2021</td>
                    </tr>
                    <tr>
                      <td>Serena Patel</td> 
                      <td className="text-right">08/11/2021</td>
                    </tr>
                  </tbody>
                </Table>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> View More
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-credit-card text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Gross Pay Calculator</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Last used today
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bank text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Payroll Deductions &amp; Contributions Calculator</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> Last used yesterday
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
