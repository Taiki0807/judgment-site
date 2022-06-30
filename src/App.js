import "./App.css";
import Judge from "./components/Judge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename="/virtuoso/">
        <Routes>
          <Route exact path="/" element={<Judge />} />
          <Route element={<Judge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
