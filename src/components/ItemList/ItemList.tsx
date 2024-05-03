import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { ItemListType } from "../ShoppingList/ShoppingList";

type ItemListProps = {
  items: ItemListType;
  addQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
};

function ItemList({ items, addQuantity, decQuantity }: ItemListProps) {
  return (
    <div className="min-w-full max-w-[500px]">
      {items &&
        items.map((item) => {
          return (
            <div key={item.id} className="flex items-center mb-4">
              <div
                onClick={() => addQuantity(item.id)}
                className="p-2 rounded-[100%] text-xs bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item?.name} quantity={item?.quantity} />
              <div
                onClick={() => {
                  decQuantity(item.id);
                  if (item.quantity === 0) {
                    toast.error(`${item.name} removed from the list`);
                  }
                }}
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
