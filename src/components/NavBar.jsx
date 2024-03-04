import search from "../icons/Seacrh.png";
import cal from "../icons/Group.jpg";
import not from "../icons/iconcal.png";
import user from "../icons/Rectangle 1061.png";
import downarrow from "../icons/Arrow---Down-2.png";

import { DatePicker } from "antd";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="flex-navbar">
        <h1>The page you are</h1>
        <div className="search">
          <div className="search-con">
            <img src={search} alt="" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="cal-not-profile">
          <div className="cal-date">
            <label htmlFor="cal">
              <div>
                <img src={cal} alt="" />
              </div>
              <DatePicker id="cal" />
            </label>
          </div>
          <div>
            <img src={not} alt="" />
          </div>
          <div className="user-name-caret">
            <div>
              <img src={user} alt="" />
            </div>
            <div className="user-name">
              <p>Justin Bergson</p>
              <p>justin@gmail.com</p>
            </div>
            <div>
              <img src={downarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
