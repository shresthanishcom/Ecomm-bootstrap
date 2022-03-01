import "./App.css";
import Home from "./Components/Home";
import "./Components/Css/index.css";
import Navbar from "./Components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import AddNewProduct from "./Components/AddNewProduct";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/addnew" element={<AddNewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:id" element={<SearchPage />} />
        <Route path="/search/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
