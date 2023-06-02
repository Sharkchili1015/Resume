
import "./index.scss"
import { routes } from "../../router/index";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function NavBar(props) {
   //创建导航hook
  const NavigateTo = useNavigate();
  const [tabIndex,setTabIndex] = useState('home')

  const clickTab = (tab) => {
    setTabIndex(tab.path)
    // eslint-disable-next-line react/prop-types
    props.setData(tab.path)
    NavigateTo(tab.path);
  }


  return (
	<div className='tabWrap'>
		{
        routes[0]["children"].map((tab) => {
          return tab.path && (
	<div className={tabIndex == tab.path ? 'tabItem tabSeleted':"tabItem"}  key={tab.name} onClick={()=> clickTab(tab)}>
		{tab.name}

		{tab.path === tabIndex ? (
			<motion.div className="underline" layoutId="underline" />
              ) : null}
	</div>
          )
        })
      }
	</div>
  );
}

export default NavBar;
