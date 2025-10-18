import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import GithubFinder from "./pages/GithubFinder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="github" element={<GithubFinder />} />
      </Route>
    </Routes>
  );
}

export default App;
