import "./App.css";
import Navbar from "./Components/Navbar";
import Heroes from "./Components/Heroes";
import Section from "./Components/Section";
import Menu from "./Components/Menu";
import Footbar from "./Components/Footbar";

function App() {
  return (
    <>
      <Navbar />
      <Heroes />
      <Section />
      <Menu />
      <Footbar />
    </>
  );
}

export default App;
