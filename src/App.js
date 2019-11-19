import React from 'react';
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from './components/shop-page/shop-page.component';
import Header from './components/header/header.component';
//



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
      {/* makes header render across all pages */}
      <Header />
      <Switch>
        <Route exact={true} path='/' component={Homepage} />
        <Route exact={true} path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
