import React from 'react';
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
//
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


//exact - controls if the url must match exactly to render that component
//path - is the path of the url
// component - is the component it will render.
//Switch - will only render a single component if a url path matches. 
// /hats will not render because it mathces "/" first.
//will only render one component.
//As long as the route matches onnly that component will render.


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={Homepage} />
        <Route exact={true} path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
