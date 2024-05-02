import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";

type ItemListProps = {
  id: number;
  name: string;
  quantity: number;
};

const shoppingItems: ItemListProps[] = [
  { id: 1, name: "Apples", quantity: 2 },
  { id: 2, name: "Banana", quantity: 4 },
];

function ShoppingList() {
  return (
    <>
      <Header />
      <div className="w-[500px] mx-auto flex flex-col items-center gap-8">
        <InputItem />
        <ItemList items={shoppingItems} />
      </div>
    </>
  );
}

export default ShoppingList;
