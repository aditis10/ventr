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
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";
import Upgrade from "views/Upgrade.js";
import Map from "views/Map.js"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bullet-list-67",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/companysuite",
    name: "Company Suite",
    icon: "nc-icon nc-briefcase-24",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Data Storage",
    icon: "nc-icon nc-box",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/payroll",
    name: "Payroll",
    icon: "nc-icon nc-tile-56",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/accounting",
    name: "Accounting",
    icon: "nc-icon nc-money-coins",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/network",
    name: "Network",
    icon: "nc-icon nc-bulb-63",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
];
export default routes;
