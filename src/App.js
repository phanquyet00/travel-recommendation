import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import Cand from "./components/Cand";
import Holiday from "./components/Holiday";
import Beaches from "./components/Beaches";
import Discover from "./components/Discover";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import BuyNow from "./components/BuyNow";

function App() {
  return (
      <Router>
      <Navbar />
          <Cand />
          <Holiday />
          <Beaches />
          <Discover />
          <Packages />
          <Footer />
          <BuyNow />
      </Router>
  );
}

export default App;
