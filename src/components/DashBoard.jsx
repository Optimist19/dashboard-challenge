import BarChart from "./BarChart";
import Market from "./Market";
import UsersData from "./UsersData";
import ProgressBar from "@ramonak/react-progress-bar";

import icon1 from "../icons/Icon (1).png";
import icon2 from "../icons/Icon (2).png";
import icon3 from "../icons/Icon (3).png";
import icon from "../icons/Icon.png";
import up from "../icons/Up.png";
import up1 from "../icons/Up1.png";

export function Dashboard() {
  return (
    <div>
      <div className="dashboard-con">
        <div className="bar-table">
          <div>
            <BarChart />
          </div>

            <div className="chart">
              <div>
                <div className="icon-market">
                  <img src={icon} alt="" />
                  <div>
                    <Market />
                  </div>
                </div>
                <p>Total Order</p>
                <p>350</p>
                <div className="up-p">
                  <div>
                    <img src={up} alt="" />
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
              <div>
                <div className="icon-market">
                  <img src={icon1} alt="" />
                  <div>
                    <Market />
                  </div>
                </div>
                <p>Total Refund</p>
                <p>270</p>
                <div className="up-p">
                  <div>
                    <img src={up1} alt="" />
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
              <div>
                <div className="icon-market">
                  <img src={icon2} alt="" />
                  <div>
                    <Market />
                  </div>
                </div>
                <p>Average Sales</p>
                <p>1567</p>
                <div className="up-p">
                  <div>
                    <img src={up1} alt="" />
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
              <div>
                <div className="icon-market">
                  <img src={icon3} alt="" />
                  <div>
                    <Market />
                  </div>
                </div>
                <p>Total Income</p>
                <p>350,000</p>
                <div className="up-p">
                  <div>
                    <img src={up} alt="" />
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
            </div>
        </div>

        <div>
          <div className="users-progress">
          <div>
            <UsersData />
          </div>
            <div className="progress-con">
              <div className="progress-column">
                <div className="platform-all">
                  <p className="first-p">Top Platform</p>
                  <p>See All</p>
                </div>

                <div>
                  <p className="first-p">Book Bazaar</p>
                  <ProgressBar
                    completed={50}
                    className="fifty first-progress"
                  />
                  <div className="p-con">
                    <p>$2,500,000</p>
                    <p>+15%</p>
                  </div>
                </div>
                <div>
                  <p className="first-p">Artisan Aisle</p>
                  <ProgressBar
                    completed={40}
                    className="fifty second-progress"
                  />
                  <div className="p-con">
                    <p>$1,800,000</p>
                    <p>+10%</p>
                  </div>
                </div>
                <div>
                  <p className="first-p">Book Bazaar</p>
                  <ProgressBar
                    completed={30}
                    className="fifty third-progress"
                  />
                  <div className="p-con">
                    <p>$1,800,000</p>
                    <p>+8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
