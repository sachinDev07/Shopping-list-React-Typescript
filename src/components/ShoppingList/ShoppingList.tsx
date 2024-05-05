import { useReducer } from "react";
import Toast from "../../utils/Toast";
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import itemReducer from "../reducers/itemReducer";
import { ItemListType } from "../reducers/types";
import {
  ShoppingDispatchContext,
  ShoppingItemContext,
} from "../../contexts/ShoppingContext";

const initialState: ItemListType[] = [];

function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ShoppingItemContext.Provider value={shoppingItems}>
      <ShoppingDispatchContext.Provider value={dispatch}>
        <Header />
        <Toast />
        <div className="w-[500px] mx-auto flex flex-col items-center gap-8">
          <InputItem />
          <ItemList />
        </div>
      </ShoppingDispatchContext.Provider>
    </ShoppingItemContext.Provider>
  );
}

export default ShoppingList;
