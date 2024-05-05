import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { ActionType } from "../reducers/types";
import { useContext } from "react";
import {
  ShoppingDispatchContext,
  ShoppingItemContext,
} from "../../contexts/ShoppingContext";

function ItemList() {
  const shoppingItems = useContext(ShoppingItemContext);
  const dispatch = useContext(ShoppingDispatchContext);

  function handleAddQuantity(id: string) {
    if (dispatch) {
      dispatch({ type: ActionType.ADD_QUANTITY, payload: { id: id } });
    }
  }

  function handleDecQuantity(id: string, name: string, quantity: number) {
    if (dispatch) {
      if (quantity === 1) {
        toast.error(`${name} is removed from the list`);
      }
      dispatch({ type: ActionType.DEC_QUANTITY, payload: { id: id } });
    }
  }

  return (
    <div className="min-w-full max-w-[500px]">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center mb-4">
              <div
                onClick={() => item.id && handleAddQuantity(item.id)}
                className="p-2 rounded-[100%] text-xs bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item?.name} quantity={item?.quantity} />
              <div
                onClick={() =>
                  item.id &&
                  item.name &&
                  item.quantity &&
                  handleDecQuantity(item.id, item.name, item.quantity)
                }
                className="p-2 rounded-[100%] text-xs bg-slate-500 text-white hover:bg-slate-700 cursor-pointer"
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ItemList;
