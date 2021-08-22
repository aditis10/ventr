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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Button,
  Col,
  Table,
} from "reactstrap";

function Upgrade() {
  return (
    <>
      <div className="content">
        <Row>
        <Col lg="3" md="6" sm="6">
        <Card>
              <CardHeader>
                <CardTitle tag="h4">FinTech Plus</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="10" xs="10">
                      <i className="fa fa-link" />&nbsp;
                        www.fintechplus.org <br />
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
                <CardTitle tag="h4">Connect</CardTitle>
                <a href="https://www.atlassian.com/software/confluence?&aceid=&adposition=&adgroup=98645564346&campaign=9616887754&creative=425944358575&device=c&keyword=confluence&matchtype=e&network=g&placement=&ds_kids=p52349493654&ds_e=GOOGLE&ds_eid=700000001542923&ds_e1=GOOGLE&gclid=CjwKCAjw64eJBhAGEiwABr9o2KLe2OvXaalAEFxaOifkQ354kt8l_Bo_DVdbiUcP0BIuHEGfyoCrlBoCJuUQAvD_BwE&gclsrc=aw.ds">
                <img src={require("assets/img/confluence.png").default} alt="confluence"/>
                </a>
                <a href="https://slack.com/intl/en-ca/">
                <img src={require("assets/img/slack.png").default} alt="slack"/>
                </a>
              </CardHeader>
              <CardBody>
              <Row>
              </Row>
              </CardBody>
        </Card>
        </Col>
      </Row>
      <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">To Do List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Task</th>
                      <th>Team</th>
                      <th className="text-right">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Update dashboard</td>
                      <td>Technical</td>
                      <td className="text-right">Incomplete</td>
                    </tr>
                    <tr>
                      <td>Redesign landing page</td>
                      <td>Marketing</td>
                      <td className="text-right">Incomplete</td>
                    </tr>
                    <tr>
                      <td>Launch twitter account</td>
                      <td>Social Media</td>
                      <td className="text-right">Incomplete</td>
                    </tr>
                    <tr>
                      <td>Reach out to ten new FinTech startups</td>
                      <td>External Affairs</td>
                      <td className="text-right">Complete</td>
                    </tr>
                    <tr>
                      <td>Fix mobile website bug</td> 
                      <td>Technical</td>
                      <td className="text-right">Complete</td>
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

export default Upgrade;