import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Orders from "./Components/Orders/Orders";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
