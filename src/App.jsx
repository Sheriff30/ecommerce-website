import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ui/ScrollToTop";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./Pages/NotFound";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ScrollToTop />
        <Toaster
          toastOptions={{
            className: "toast",
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
