import { Children, createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, p) => {
    setCart((prevCart) => {
      const estaElProducto = prevCart.find((product) => product.id === id);
      if (estaElProducto) {
        return prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      }
      return [...prevCart, { ...p, quantity: 1 }];
    });
  };

  const sumarUno = (id) => {
    setCart(
      cart.map((p) => {
        if (p.id == id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      }),
    );
  };

  const restarUno = (id) => {
    setCart(
      cart.map((p) => {
        if (p.id == id) {
          if (p.quantity == 1) {
            alert("No puedes llevar menos de una unidad.");
            return p;
          }
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      }),
    );
  };

  const quitarDelCarrito = (id) => {
    setCart(cart.filter((p) => p.id != id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, sumarUno, restarUno, quitarDelCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
