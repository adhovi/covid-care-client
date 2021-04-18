import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Book from "./components/UserDashboard/Book/Book";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import Bookings from "./components/UserDashboard/Bookings/Bookings";
import AddReview from "./components/UserDashboard/AddReview/AddReview";
import OrderList from "./components/Admin/OrderList/OrderList";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import NotFound from "./components/NotFound/NotFound";
import NotAdmin from "./components/NotAdmin/NotAdmin";

export const UserContext = createContext();

function App() {
  const [loggedUserData, setLoggedUserData] = useState({
    isLoggedIn: false,
    userName: "",
    email: "",
    image: "",
    error: "",
    handleSignOut: null,
    role: "user",
  });

  return (
    <UserContext.Provider value={[loggedUserData, setLoggedUserData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/bookings">
            <Bookings></Bookings>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <AdminRoute path="/admin/orders">
            <OrderList></OrderList>
          </AdminRoute>
          <AdminRoute path="/admin/addService">
            <AddService></AddService>
          </AdminRoute>
          <AdminRoute path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path="/admin/manageServices">
            <ManageServices></ManageServices>
          </AdminRoute>
          <Route path="/notAdmin">
            <NotAdmin></NotAdmin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
