import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type ItemListProps = {
  items: {
    id: number;
    name: string;
    quantity: number;
  }[];
};

function ItemList({ items }: ItemListProps) {
  return (
    <div className="min-w-full max-w-[500px]">
      {items &&
        items.map((item) => {
          return (
            <div key={item?.id} className="flex items-center mb-4">
              <div className="p-2 rounded-[100%] text-xs bg-blue-500 text-white hover:bg-blue-700 cursor-pointer">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item?.name} quantity={item?.quantity} />
              <div className="p-2 rounded-[100%] text-xs bg-slate-500 text-white hover:bg-slate-700 cursor-pointer">
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ItemList;
