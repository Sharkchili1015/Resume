import { createBrowserRouter,Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Layout from "../components/LayOut/index";
export const routes = [
 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element:<Navigate to='/home' />
      },
      {
        path: "home",
        name: "首页",
        element: <Home />,
      },
      {
        path: "about",
        name: "关于",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
