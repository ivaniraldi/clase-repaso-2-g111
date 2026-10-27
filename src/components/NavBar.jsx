import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

export default function NavBar() {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  return (
    <nav className="bg-dark d-flex justify-content-between p-3 align-items-center">
      <div>
        <h4 className="text-white">FriendStore</h4>
      </div>
      <div className="d-flex gap-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-white" : "link-no-activo"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-white" : "link-no-activo"
          }
        >
          Productos
        </NavLink>
        {!token && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-white" : "link-no-activo"
            }
          >
            Iniciar Sesión
          </NavLink>
        )}
        {!token && (
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-white" : "link-no-activo"
            }
          >
            Registrarme
          </NavLink>
        )}
        {token && (
          <NavLink
            onClick={() => logout()}
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-white" : "link-no-activo"
            }
          >
            Cerrar Sesión
          </NavLink>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-white" : "link-no-activo"
          }
        >
          Sobre nosotros
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-white" : "link-no-activo"
          }
        >
          ${cart.reduce((a, p) => (a += p.price * p.quantity), 0).toLocaleString()}{" "}
        </NavLink>
      </div>
    </nav>
  );
}
