import { Routes, Route } from "react-router-dom";
import Sidebar from "../src/pages/global/Sidebar";
import Invoice from "./pages/invoice";
import Payment from "./pages/payment";
import Supplier from "./pages/supplier";
function App() {
  return (
    <div className="App">
     
      <Sidebar />
      <Routes>
        <Route exact path="/" />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
    </div>
  );
}

export default App;
