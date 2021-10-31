import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Offers from './Components/Offers/Offers.js';
import Login from './Components/Login/Login.js';
import NotFound from './Components/NotFound/NotFound.js';
import Footer from './Components/Footer/Footer.js';
import AuthProvider from './Context/AuthProvider.js';
import Register from './Components/Register/Register.js';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute.js';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.js';
import MyOrder from './Components/MyOrder/MyOrder.js';
// import Trainer from './Components/Trainer/Trainer.js';
// import Package from './Components/Package/Package.js';
// import Details from './Components/Details/Details/Details.js';
// import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute.js';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder/:id">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/offers">
              <Offers></Offers>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

