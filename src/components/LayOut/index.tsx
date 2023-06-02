import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/index";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss"
import { useSelector } from "react-redux";
const Layout = () => {
	//获取reducer
	const {activeTab} = useSelector((state) => {
		return state.tab
	})
	return (
		<div className="conatiner">
			<div className="nav" >
				<NavBar  />
			</div>

			<div className="content">
				<AnimatePresence exitBeforeEnter>
					<motion.div
						key={activeTab ? activeTab : "empty"}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Layout;
