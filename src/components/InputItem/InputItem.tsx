import { toast } from "react-toastify";

function InputItem() {
  return (
    <div className="w-[400px] flex gap-4">
      <input
        type="text"
        placeholder="Add an item..."
        className="w-full p-4  border-b-[1px] border-b-gray-400 focus:outline-none"
      />
      <button
        onClick={() => toast.success("Successfully added item")}
        className="mt-2 w-[130px] h-[40px] bg-blue-500 text-white border-none rounded-lg hover:bg-blue-600"
      >
        Add Item
      </button>
    </div>
  );
}

export default InputItem;
