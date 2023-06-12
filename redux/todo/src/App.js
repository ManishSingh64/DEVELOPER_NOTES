import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolists" element={<Form />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
