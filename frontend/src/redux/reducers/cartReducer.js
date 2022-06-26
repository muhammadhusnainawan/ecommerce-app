import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existedItemInCart = state.cartItems.find(
        (x) => x.productId === item.productId
      );
      if (existedItemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existedItemInCart.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
      default:
      return state;
  }
};
