import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import Section2 from "./Section2";
import Home from "./Home";
import Team from "./Team";
import Section3 from "./Section3";

function App() {
  return (
    <>
 
    <Header/>
  <Switch>  
    <Route exact path="/" component={Home}/>
    <Route exact path="/Banner" component={Banner}/>
    <Route exact path="/Section2" component={Section2}/>
    <Route exact path="/Team" component={Team}/>
    <Route exact path="/Section3" component={Section3}/>

    <Redirect to="/" />
  </Switch>

    </>
  );
}

export default App;
