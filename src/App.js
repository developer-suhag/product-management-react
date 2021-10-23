import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import AddProduct from "./components/AddProduct/AddProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/addProdcuts">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/update/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
