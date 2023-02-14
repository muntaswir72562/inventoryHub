import { Typography } from "@mui/material";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Typography variant="h1">hello world</Typography>
    
    <Switch>
      <Route exact path="/">
      <Typography variant="h1">This is the home page</Typography>
      </Route>
      <Route path="/invoice">
      <Typography variant="h1">This is the invoice page</Typography>
      </Route>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
