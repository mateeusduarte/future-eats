import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from '../screens/Home'
import { Login } from "../screens/LogIn";
import { AddAddress } from '../screens/AddAddress'
import { SignUp } from '../screens/SignUp'
import { Feed } from '../screens/Feed'
import { Cart } from '../screens/Cart'
import { RestaurantDetails } from "../screens/RestaurantDetails";
import { Profile } from "../screens/Profile";
import { EditProfile } from "../screens/EditProfile";
import { EditAddress } from "../screens/EditAddress";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/add-address'>
            <AddAddress/>
          </Route>
          <Route exact path='/signup'>
            <SignUp/>
          </Route>
          <Route exact path='/feed'>
            <Feed/>
          </Route>
          <Route exact path='/cart'>
            <Cart/>
          </Route>
          <Route exact path='/restaurant-details'>
            <RestaurantDetails/>
          </Route>
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          <Route exact path='/edit-profile'>
            <EditProfile/>
          </Route>
          <Route exact path='/edit-address'>
            <EditAddress/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}
