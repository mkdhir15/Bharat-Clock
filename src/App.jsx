import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <div className="app">
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <div className="time">
          <CurrentTime></CurrentTime>{" "}
        </div>
      </div>
    </center>
  );
}

export default App;
