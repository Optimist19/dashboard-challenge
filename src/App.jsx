// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import UserPage from "./pages/user";
import BarChartPage from "./pages/barchart";
import MarketPage from "./pages/market";
import DashBoardPage from "./pages/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoardPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="trend" element={<MarketPage />} />
          <Route path="barchart" element={<BarChartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
