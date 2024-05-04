import { useReducer } from "react";
import Toast from "../../utils/Toast";
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import itemReducer from "../reducers/itemReducer";
import { ActionType, ItemListType } from "../reducers/types";

const initialState: ItemListType[] = [];

function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, initialState);

  function handleAddItem(name: string) {
    dispatch({ type: ActionType.ADD_ITEM, payload: { name: name } });
  }

  function handleAddQuantity(id: string) {
    dispatch({ type: ActionType.ADD_QUANTITY, payload: { id: id } });
  }

  function handleDecQuantity(id: string) {
    dispatch({ type: ActionType.DEC_QUANTITY, payload: { id: id } });
  }

  return (
    <>
      <Header />
      <Toast />
      <div className="w-[500px] mx-auto flex flex-col items-center gap-8">
        <InputItem addItem={handleAddItem} />
        <ItemList
          items={shoppingItems}
          addQuantity={handleAddQuantity}
          decQuantity={handleDecQuantity}
        />
      </div>
    </>
  );
}

export default ShoppingList;
