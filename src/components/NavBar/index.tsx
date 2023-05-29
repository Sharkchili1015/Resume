import { useNavigate } from "react-router-dom";
import { routes } from "../../router/index";
import ThemeSwitch from "../themeSwitch";
import * as Tabs from "@radix-ui/react-tabs";

function NavBar() {
  //创建导航hook
  const NavigateTo = useNavigate();
  // 切换tab的方法函数
  const tabChange = (value: string) => {
    NavigateTo(value);
  };
  return (
	<>
		<Tabs.Root defaultValue="home" onValueChange={tabChange}>
			<Tabs.List>
				{routes[0]["children"].map((routeItem) => {
                    routeItem.path 
            return routeItem.path && (
	<Tabs.Trigger value={routeItem.path} key={routeItem.value}>
		{routeItem.name}
	</Tabs.Trigger>
            );
          })
          }
			</Tabs.List>
		</Tabs.Root>

		<ThemeSwitch />
	</>
  );
}

export default NavBar;
