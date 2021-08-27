import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/RegisterForm";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Categories from "./components/Categories/Categories";
import NewPost from "./components/New Post/NewPost";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import EditProfile from "./components/Edit-Profile-folder/Edit-Profile";
import Profile from "./components/Profile/Profile";
import FindCars from "./components/Products/FindCars";
import FindTablet from "./components/Products/FindTablet";
import FindMobile from "./components/Products/FindMobile";
import FindComputer from "./components/Products/FindComputer";
import FindLaptop from "./components/Products/FindLaptop";
import Playstation from "./components/Products/Playstation";
import Clothes from "./components/Products/Clothes";
import BabySupplies from "./components/Products/BabySupplies";
import Products from "./components/Products/Products";
import MyAds from "./components/MyAds/MyAds";
import UpdatePost from "./components/Update Post/UpdatePost";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Home/:id_user" component={Home}>
          <NavBar />
          <Home />
          <About />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/About/:id_user" component={About}>
          <NavBar />
          <About />
          <Footer />
        </Route>
        <Route exact path="/Contact/:id_user" component={Contact}>
          <NavBar />
          <Contact />
          <br></br>
          <Footer />
        </Route>
        <Route exact path="/Categories/:id_user" component={Categories}>
          <NavBar />
          <Categories />
          <br></br>
          <Footer />
        </Route>
        <Route exact path="/NewPost/:id_user" component={NewPost}>
          <NavBar />
          <NewPost />
          <Footer />
        </Route>
        <Route exact path="/EditProfile/:id_user" component={EditProfile}>
          <NavBar />
          <EditProfile />
          <Footer />
        </Route>
        <Route exact path="/Profile/:id_user" component={Profile}>
          <NavBar />
          <Profile />
          <Footer />
        </Route>
        <Route exact path="/MyAds/:id_user" component={MyAds}>
          <NavBar />
          <MyAds />
          <Footer />
        </Route>
        <Route exact path="/Products/:id_user" component={Products}>
          <NavBar />
          <Products />
          <Footer />
        </Route>
        <Route exact path="/Cars/:id_user" component={FindCars}>
          <NavBar />
          <FindCars />
          <Footer />
        </Route>

        <Route exact path="/Mobile/:id_user" component={FindMobile}>
          <NavBar />
          <FindMobile />
          <Footer />
        </Route>
        <Route exact path="/Tablet/:id_user" component={FindTablet}>
          <NavBar />
          <FindTablet />
          <Footer />
        </Route>
        <Route exact path="/Computer/:id_user" component={FindComputer}>
          <NavBar />
          <FindComputer />
          <Footer />
        </Route>
        <Route exact path="/Laptop/:id_user" component={FindLaptop}>
          <NavBar />
          <FindLaptop />
          <Footer />
        </Route>
        <Route exact path="/Playstation/:id_user" component={Playstation}>
          <NavBar />
          <Playstation />
          <Footer />
        </Route>
        <Route exact path="/Clothes/:id_user" component={Clothes}>
          <NavBar />
          <Clothes />
          <Footer />
        </Route>
        <Route exact path="/BabySupplies/:id_user" component={BabySupplies}>
          <NavBar />
          <BabySupplies />
          <Footer />
        </Route>
        <Route
          exact
          path="/UpdatePost/:id_user/:post_id"
          component={UpdatePost}
        >
          <NavBar />
          <UpdatePost />
          <Footer />
        </Route>
        <Route path="/Cart/:id_user" component={Cart}>
          <NavBar />
          <Cart />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
