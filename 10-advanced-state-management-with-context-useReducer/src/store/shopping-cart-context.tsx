import { createContext, useReducer } from "react";
import { ItemType } from "../components/Cart";
import { DUMMY_PRODUCTS } from "../dummy-products";

type ContextType = {
  items: ItemType[];
  addItemToCart: (id: string) => void;
  updateCartItemQuantity: (productId: string, amount: number) => void;
};

type CartState = {
  items: ItemType[];
};
type CartActions =
  | { type: "ADD_ITEM"; payload: { id: string } }
  | { type: "UPDATE_ITEM"; payload: { id: string; amount: number } };

type CartContextProviderProps = {
  children?: React.ReactNode;
};

export const CartContext = createContext<ContextType>({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});

function shoppingCartReducer(state: CartState, action: CartActions) {
  if (action.type === "ADD_ITEM") {
    const updatedItems: ItemType[] = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id,
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload.id,
      );
      if (product && action.payload.id) {
        updatedItems.push({
          id: action.payload.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.id,
    );

    if (updatedItemIndex === -1) {
      return state;
    }

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] },
  );

  function handleAddItemToCart(id: string) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: id,
      },
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        id: productId,
        amount: amount,
      },
    });
  }
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
