import { useState } from "react";
import Toast from "../../utils/Toast";
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { v4 as uuidv4 } from "uuid";

export type ItemListType = {
  id: string;
  name: string;
  quantity: number;
}[];

function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState<ItemListType>([]);

  function handleAddItem(itemName: string) {
    setShoppingItems([
      ...shoppingItems,
      {
        id: uuidv4(),
        name: itemName,
        quantity: 1,
      },
    ]);
  }

  function handleAddQuantity(itemId: string) {
    const newShoppingItems = shoppingItems.map((item) => {
      if (item.id === itemId) {
        item.quantity++;
      }
      return item;
    });

    setShoppingItems(newShoppingItems);
  }

  function handleDecQuantity(itemId: string) {
    let newShoppingItems = shoppingItems.map((item) => {
      if (item.id === itemId) {
        item.quantity--;
      }
      return item;
    });

    newShoppingItems = newShoppingItems.filter((item) => item.quantity > 0);
    setShoppingItems(newShoppingItems);
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
