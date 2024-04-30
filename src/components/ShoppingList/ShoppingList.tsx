import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";

function ShoppingList() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <InputItem />
      </div>
    </>
  );
}

export default ShoppingList;
