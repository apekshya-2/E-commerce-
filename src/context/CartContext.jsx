import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updatedCart);
    } else {
      // Add new item with quantity
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (cartItems, productId, action) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === productId) {
          let newUnit = item.quantity;
          if (action === "increase") {
            newUnit = newUnit + 1;
          } else if (action === "decrease") {
            newUnit = newUnit - 1;
          }
          return newUnit > 0 ? { ...item, quantity: newUnit } : null;
        }
        return item;
      })
      .filter((item) => item != null); // remove item with quantity 0

    setCartItem(updatedCart); // make sure to set updated cart
  };

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
