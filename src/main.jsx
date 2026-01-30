import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/about/AboutPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import NotFoundComponent from "./components/cards/NotFoundComponent.jsx";
import Products from "./pages/product/Products.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* custome page not Found  */}
          <Route path="/*" element={<NotFoundComponent />} />
        </Route>
        {/* dynamic route */}
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
