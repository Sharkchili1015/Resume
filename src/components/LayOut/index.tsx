import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/index";
const Layout = () => {
  return (
	<>
		<div className="nav">
			<NavBar />
		</div>

		<div className="content">
			<Outlet />
		</div>
	</>
  );
};

export default Layout;
