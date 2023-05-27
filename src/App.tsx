import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./views/Home/Home";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const handleClick = (count) => {
    setCount((count) => count + 1);
  };

  return (

    <>
      {/* <h1>目前简历模板为：{t("userInfo.name")}</h1> */}
      <Home></Home>
    </>
  );
}

export default App;
