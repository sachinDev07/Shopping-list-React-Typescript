import { useState } from "react";
import { toast } from "react-toastify";

type InputItemProp = {
  addItem: (itemName: string) => void;
};
function InputItem({ addItem }: InputItemProp) {
  const [itemName, setItemName] = useState<string>("");

  return (
    <div className="w-[400px] flex gap-4">
      <input
        type="text"
        value={itemName}
        placeholder="Add an item..."
        onChange={(e) => setItemName(e.target.value)}
        className="w-full p-4  border-b-[1px] border-b-gray-400 focus:outline-none"
      />
      <button
        onClick={() => {
          addItem(itemName);
          setItemName("");
          toast.success("Successfully added item");
        }}
        className="mt-2 w-[130px] h-[40px] bg-blue-500 text-white border-none rounded-lg hover:bg-blue-600"
      >
        Add Item
      </button>
    </div>
  );
}

export default InputItem;
