import { Typography } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Invoice from "../src/components/invoice"
function App() {
  return (
  
    <div className="App">
      {/* <Typography variant="h1">hello world</Typography> */}
      <Routes>
      {/* <Route path ="/" element={<dashboard/>}/> */}
      <Route path ="/invoice" element={<Invoice/>}/>
    </Routes>
    </div>
    
    
  );
}

export default App;
