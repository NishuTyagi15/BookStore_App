import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import CartBag from './Components/Cart/CartBag';
import WishList from './Components/Wishlist/Wishlist';
import OrderSuccess from './Components/OrderPlaced/OrderSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/cart" component={CartBag} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/orderplaced" component={OrderSuccess} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
