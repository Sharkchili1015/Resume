import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/index";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss"
const Layout = () => {
	const [dataFromChild, setDataFromChild] = useState('');
	const handleData = (data) => {
		setDataFromChild(data);
	}
	return (
		<div className="conatiner">
			<div className="nav" >
				<NavBar setData={handleData} />
			</div>

			<div className="content">
				<AnimatePresence exitBeforeEnter>
					<motion.div
						key={dataFromChild ? dataFromChild : "empty"}
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
