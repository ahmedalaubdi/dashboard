import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topBar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/home/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
