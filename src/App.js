import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import AddNewProduct from "./Components/AddNewProduct";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Authentication/Login";
import Navbarr from "./Components/Navbarr";

import "./App.css";
import "./Components/Css/index.css";

function App() {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/addnew" element={<AddNewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:id" element={<SearchPage />} />
        <Route path="/search/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
