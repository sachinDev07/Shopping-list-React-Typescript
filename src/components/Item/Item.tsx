function Item({ itemName, quantity }: { itemName: string; quantity: number }) {
  return (
    <div className="w-full flex justify-around">
      <div className="basis-4/5 text-xl">{itemName}</div>
      <div className="text-xl text-blue-700">{quantity}</div>
    </div>
  );
}

export default Item;
