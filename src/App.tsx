import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
	<>
		<div className="flex justify-center">
			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>

			<a href="https://react.dev" target="_blank" rel="noreferrer">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
		</div>

		<h1>目前简历模板为：{t("userInfo.name")}</h1>

		<div className="card">
			<button onClick={() => handleClick()}>count is {count}</button>

			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</div>

		<p className="read-the-docs">
			Click on the Vite and React logos to learn more
		</p>
	</>
  );
}

export default App;
