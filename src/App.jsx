import { useState } from "react";
import Header from "./componenets/Header";
import WeatherCard from "./componenets/WeatherCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <WeatherCard />
      </main>
    </>
  );
}

export default App;
