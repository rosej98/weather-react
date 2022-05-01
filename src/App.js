import "./App.css";
import City from "./City";
import Forecast from "./Forecast";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <form>
        <div className="card main">
          <div className="card-body">
            <Search />
            <City city="Berlin" />
            <Forecast />
          </div>
          <br />
          <div class="footer">
            <a href="https://github.com/rosej98/weather-react" target="_blank">
              Open-source code
            </a>
            , by R J
          </div>
        </div>
      </form>
    </div>
  );
}
