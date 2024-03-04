import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'

function Layout() {
  return (
	<div>
  <NavBar />
    <SideBar />
      <Outlet />
    {/* <Footer/> */}
  </div>
  )
}

export default Layout