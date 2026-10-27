import { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleWishlist = (id) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const addToBag = (product) => {
    setBag((b) => {
      const existing = b.find((x) => x.id === product.id);
      if (existing) return b.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
      return [...b, { ...product, qty: 1 }];
    });
  };

  const removeFromBag = (id) => setBag((b) => b.filter((x) => x.id !== id));
  const updateQty = (id, qty) => setBag((b) => b.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
  const clearBag = () => setBag([]);

  return (
    <StoreContext.Provider value={{
      wishlist, toggleWishlist,
      bag, addToBag, removeFromBag, updateQty, clearBag,
      searchOpen, setSearchOpen,
      bagOpen, setBagOpen,
      checkoutOpen, setCheckoutOpen,
      selectedProduct, setSelectedProduct,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);