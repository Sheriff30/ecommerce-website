import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ui/ScrollToTop";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Category from "./Pages/Category";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
