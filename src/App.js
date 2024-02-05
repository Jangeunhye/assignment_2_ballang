import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MyPage from "./pages/MyPage/MyPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
