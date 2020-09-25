import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios'
import Home from "./components/Home";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";

const App = () =>  {

    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('id');



    const PrivateRoute = ({ token, id, ...props }) =>
        (token && id) ? <Route { ...props } /> : <Redirect to="/" />;

    return (
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={Home} exact />
                  {/*<Route path="/edit" component={EditProfile} />*/}
                  {/*<Route path="/profile" component={Profile} />*/}
                  <PrivateRoute token={token} id={id}  path="/edit" name="edit" render={props => <EditProfile {...props}/>} />
                  <PrivateRoute token={token} id={id}  path="/profile" name="profile" render={props => <Profile {...props}/>} />

              </Switch>
          </BrowserRouter>
      )
}

export default App;
