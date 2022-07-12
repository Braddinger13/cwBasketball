import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Trainers from "./components/Trainers";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Services />
      <Trainers />
      {/* <Contact /> */}
      {/* Calender System, Show availability */}
    </div>
  );
}

export default App;
