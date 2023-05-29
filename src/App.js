import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import "antd/dist/antd.css";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";
import AllBooking from "./pages/AllBooking";
import DeleteBooking from "./pages/DeleteBooking";
import PreHomePage from "./pages/PreHomePage";
import LoginOTP from "./pages/LoginOTP";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/preHome" exact component={PreHomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/loginOTP" exact component={LoginOTP} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/booking/:carid" exact component={BookingCar} />
        <ProtectedRoute path="/userbookings" exact component={UserBookings} />
        <ProtectedRoute path="/addcar" exact component={AddCar} />
        <ProtectedRoute path="/allbookings" exact component={AllBooking} />
        <ProtectedRoute path="/deleteBooking" exact component={DeleteBooking} />

        <ProtectedRoute path="/editcar/:carid" exact component={EditCar} />
        <ProtectedRoute path="/admin" exact component={AdminHome} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}
