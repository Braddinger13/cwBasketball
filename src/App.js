import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Trainers from "./components/Trainers";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Services />
      <Trainers />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
