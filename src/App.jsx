import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Synopsis from "./components/Synopsis";
import Characters from "./components/Character";
import Pilot from "./components/Pilot";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing/>
        <Synopsis/>
        <Characters/>
        <Pilot/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
