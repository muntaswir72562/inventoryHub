import { Routes, Route } from "react-router-dom";
import Invoice from "../src/components/invoice";
import SideBar from "./components/global/Sidebar";
import Topbar from "./components/global/Topbar";
import Dashboard from "./pages/dashboard/dashboard";
import Page from "./pages/page";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="flex mt-3">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
