import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
 
  <Switch>  
    <Route exact path="/" component={Home}/>
    <Redirect to="/" />
  </Switch>

    </>
  );
}

export default App;
