import { createContext, useContext, useState } from "react";
import { ItemType } from "../components/Cart";
import { DUMMY_PRODUCTS } from "../dummy-products";

type ContextType = {
  items: ItemType[];
  addItemToCart: (id: string) => void;
  updateCartItemQuantity: (productId: string, amount: number) => void;
};
export const CartContext = createContext<ContextType>({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});

type handleState = {
  items: ItemType[];
};
type CartContextProviderProps = {
  children?: React.ReactNode;
};

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<handleState>({
    items: [],
  });

  function handleAddItemToCart(id: string) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems: ItemType[] = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        if (product) {
          updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }
  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
