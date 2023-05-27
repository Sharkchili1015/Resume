
import * as Tabs from '@radix-ui/react-tabs';
import { useNavigate } from 'react-router-dom';
import  {routes} from "../../router/index"
function NavBar () {
    //创建导航hook
    const NavigateTo  = useNavigate()
    // 切换tab的方法函数
    const tabChange = (value:string) => {
        NavigateTo(value)
    }
    return (
       <>
            <Tabs.Root defaultValue='home' onValueChange={tabChange}>
                <Tabs.List>
                {
                    routes.map((routeItem,index)=>{
                        return <Tabs.Trigger value={routeItem.path} key={routeItem.value}>
                                {routeItem.name} 
                                </Tabs.Trigger>
                    })
                }
                </Tabs.List>
            </Tabs.Root>
       </>
    )
   }
   
   export default NavBar