import { Route,  Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
