import "./App.css";

import Current from "./Current";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="container">
          <Current />
          <Weather />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
