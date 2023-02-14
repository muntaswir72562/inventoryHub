import { Typography } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Sidebar from "../src/pages/global/Sidebar"
import Invoice from "../src/components/invoice"
function App() {
  return (
    
      <div className="App">
        {/* <Typography variant="h1">hello world</Typography> */}
          <Sidebar/>
        <Routes>
          <Route exact path="/" />
          <Route path="/invoice" element={<Invoice/>}/>
            
        </Routes>
      </div>
  );
}

export default App;
