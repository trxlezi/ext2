import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import List from "./Pages/List"
import Donate from "./Pages/Donate"


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
