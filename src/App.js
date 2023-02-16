import { Routes, Route } from "react-router-dom";
import Sidebar from "../src/pages/global/Sidebar";
import Invoice from "./pages/invoice";

function App() {
  return (
    <div className="App">
     
      <Sidebar />
      <Routes>
        <Route exact path="/" />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
