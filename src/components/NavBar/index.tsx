
import "./index.scss"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTab } from "../../store/moudules/tab"
function NavBar() {
  //创建导航hook
  const NavigateTo = useNavigate();
  //获取reducer
  const tabStore = useSelector((state) => {
    return state.tab
  })
  const dispatch = useDispatch()
  // 点击tab切换
  const clickTab = (tab) => {
    dispatch(updateActiveTab(tab.path))
    NavigateTo(tab.path);
  }
  return (
	<div className='tabWrap'>
		{
        tabStore.tabList.map((tab) => {
          return tab.path && (
	<div className={tabStore.activeTab == tab.path ? 'tabItem tabSeleted' : "tabItem"} key={tab.name} onClick={() => clickTab(tab)}>
		{tab.name}

		{tab.path === tabStore.activeTab ? (
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
