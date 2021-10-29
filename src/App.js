import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import CartBag from './Components/Cart/CartBag';
import OrderSuccess from './Components/OrderPlaced/OrderSuccess';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router> */}
      {/* <CartBag/> */}
      <OrderSuccess />
    </div>
  );
}

export default App;
