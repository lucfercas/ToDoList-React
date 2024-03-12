import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  

  return (
    <BrowserRouter>
      
      <div className="header">
      <h1 className="text-l font-bold underline">React ToDo List</h1>
      <p>Currently you have things to do...</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
