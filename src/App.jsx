import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <>
 
    <Header/>
  <Switch>  
    <Route exact path="/" component={Home}/>

    <Redirect to="/" />
  </Switch>

    </>
  );
}

export default App;
