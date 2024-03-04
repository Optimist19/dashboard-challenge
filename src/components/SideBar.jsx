import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import logo from "../icons/logo.png";
import frame12 from "../icons/Frame 12.png";
import trendup from "../icons/trend-up.png";
import users from "../icons/profile-2user.png";
import box from "../icons/box.png";
import discountshape from "../icons/discount-shape.png";
import info from "../icons/info-circle.png";
import frame42 from "../icons/Frame 427319676.jpg";
import vector from "../icons/moon 1.jpg";

import arrowright from "../icons/arrow-right.png";

import setting from "../icons/setting-2.png";
import logout from "../icons/logout.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sidebar-con">
      <Sidebar collapsed={collapsed}>
        <Menu>
          <div className="first-menuitem-set">
            <MenuItem>
              <div
                className="logo-con sb-button"
                onClick={() => setCollapsed(!collapsed)}>
                <img src={logo} alt="" />
              </div>
            </MenuItem>

            <Link to="/">
              <MenuItem>
                <div className="logo-con">
                  <img src={frame12} alt="" />
                </div>
                <p>Dashboard</p>
              </MenuItem>
            </Link>

            <Link to="/trend">
              <MenuItem>
                <div className="logo-con">
                  <img src={trendup} alt="" />
                </div>
                <p>Market</p>
              </MenuItem>
            </Link>

            <Link to="/user">
              <MenuItem>
                <div className="logo-con">
                  <img src={users} alt="" />
                </div>
                <p>Users</p>
              </MenuItem>
            </Link>

            <Link to="/barchart">
              <MenuItem>
                <div className="logo-con">
                  <img src={box} alt="" />
                </div>
                <p>Bar chart</p>
              </MenuItem>
            </Link>
          
            <MenuItem>
              <div className="logo-con">
                <img src={discountshape} alt="" />
              </div>
              <p>Discount</p>
            </MenuItem>
            <MenuItem>
              <div className="logo-con">
                <img src={info} alt="" />
              </div>
              <p>Info</p>
            </MenuItem>
          </div>

          <div className="dark-light-mode">
            <MenuItem>
              <div className="logo-con">
                <img src={frame42} alt="" />
              </div>
            </MenuItem>
            <MenuItem>
              <div className="logo-con">
                <img src={vector} alt="" />
              </div>
            </MenuItem>
          </div>

          <div className="settings-others">
            <MenuItem>
              <div className="logo-con">
                <img src={arrowright} alt="" />
              </div>
            </MenuItem>
            <MenuItem>
              <div className="logo-con">
                <img src={setting} alt="" />
              </div>
              <p>Settings</p>
            </MenuItem>
            <MenuItem>
              <div className="logo-con">
                <img src={logout} alt="" />
              </div>
              <p>Logout</p>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
      {/* <NavBar /> */}
      {/* <main style={{ padding: 20 }}>
		hi
	  </main> */}
    </div>
  );
}

export default SideBar;
