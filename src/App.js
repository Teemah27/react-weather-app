import "./App.css";
import Search from "./Search";
import Current from "./Current";
import Weatherapp from "./Weatherapp";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="container">
          <Search />
          <Current />
          <Weatherapp />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
