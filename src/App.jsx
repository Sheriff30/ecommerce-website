import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ui/ScrollToTop";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Category from "./Pages/Category";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
