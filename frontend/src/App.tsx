import { Routes, Route } from "react-router-dom";

import HomeView from "./pages/HomeView";
import SignInView from "./pages/SignInView";
import SignupView from "./pages/SignupView";
import NotFoundView from "./pages/NotFoundView";
import AboutView from "./pages/AboutView";
import ContactView from "./pages/ContactView";
import ShopView from "./pages/ShopView";
import ProfileView from "./pages/ProfileView";
import { ProtectedRoute } from "./components/ProtectedRoute";
import ClothDetailView from "./pages/ClothDetailView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />}></Route>
      <Route path="/sign-in" element={<SignInView />}></Route>
      <Route path="/signup" element={<SignupView />}></Route>
      <Route path="/about" element={<AboutView />}></Route>
      <Route path="/contact" element={<ContactView />}></Route>
      <Route path="/shop" element={<ShopView />}></Route>
      <Route path="/shop/details/:clothId/" element={<ClothDetailView />}></Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileView />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFoundView />}></Route>
    </Routes>
  );
}

export default App;
