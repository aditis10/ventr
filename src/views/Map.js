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
import { Card, CardHeader, Table, CardFooter, CardTitle, CardBody, Row, Col } from "reactstrap";

function Map() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">System Updates</p>
                      <CardTitle tag="p">None</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
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
                      <i className="nc-icon nc-bell-55 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Reminders</p>
                      <CardTitle tag="p">3</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
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
                      <i className="nc-icon nc-email-85 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <CardTitle tag="p">Create an Invoice</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
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
                      <i className="nc-icon nc-tile-56 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Manage Fixed Assets</p>
                      <CardTitle tag="p">20K</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <i className="fas fa-sync-alt" /> View More
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h4">Incoming and Outgoing Payment Record</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Check</th>
                      <th>Bank</th>
                      <th>Branch</th>
                      <th>Account No.</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>08/04/2021</td>
                      <td>1</td>
                      <td>BMO</td>
                      <td>001</td>
                      <td>###########</td>
                      <td className="text-right">$ 11, 467</td>
                    </tr>
                    <tr>
                      <td>07/04/2021</td>
                      <td>1</td>
                      <td>BMO</td>
                      <td>001</td>
                      <td>###########</td>
                      <td className="text-right">$ 8, 003</td>
                    </tr>
                    <tr>
                      <td>06/04/2021</td>
                      <td>1</td>
                      <td>BMO</td>
                      <td>001</td>
                      <td>###########</td>
                      <td className="text-right">$4, 559</td>
                    </tr>
                    <tr>
                      <td>05/04/2021</td>
                      <td>1</td>
                      <td>BMO</td>
                      <td>001</td>
                      <td>###########</td>
                      <td className="text-right">$ 1, 632</td>
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

export default Map;
