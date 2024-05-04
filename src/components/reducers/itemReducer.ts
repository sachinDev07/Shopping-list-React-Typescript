import { toast } from "react-toastify";
import { Action, ItemListType } from "./types";
import { v4 as uuidv4 } from "uuid";

function itemReducer(state: ItemListType[], action: Action) {
  if (action.type === "ADD_ITEM") {
    return [
      ...state,
      {
        id: uuidv4(),
        name: action.payload.name,
        quantity: 1,
      },
    ];
  } else if (action.type === "ADD_QUANTITY") {
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity && item.quantity + 1 }
        : item,
    );
  } else if (action.type === "DEC_QUANTITY") {
    if (action.payload.quantity === 1) {
      toast.error(`${action.payload.name} removed from the list`);
    }

    return state
      .map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity && item.quantity - 1 }
          : item,
      )
      .filter((item) => item.quantity && item.quantity > 0);
  } else {
    return state;
  }
}

export default itemReducer;
