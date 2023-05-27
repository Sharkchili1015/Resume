import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home"
import About from "../pages/about"
export const routes = [
    {
        path: "/",
        name:'首页',
        value:'home',
        element: <Home/>,
        
    },
    {
        path: "/about",
        name:'关于',
        value:'about',
        element: <About/>,
    }
]

const router = createBrowserRouter(routes)

export default router