import { Navigate, Route, Routes } from "react-router-dom";
import LandingView from "./views/LandingView";
import HomeView from "./views/HomeView";
import GalleryView from "./views/GalleryView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import CartView from "./views/CartView";
import DetailView from "./views/DetailView";
import AboutView from "./views/AboutView";
import NotFoundView from "./views/NotFoundView";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const {token} = useContext(UserContext)
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/gallery" element={<GalleryView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/cart" element={token ? <CartView /> : <Navigate to={"/login"}/>} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/detail/:id" element={<DetailView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
