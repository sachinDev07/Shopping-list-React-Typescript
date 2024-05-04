function Item({
  itemName,
  quantity,
}: {
  itemName: string | undefined;
  quantity: number | undefined;
}) {
  return (
    <div className="w-full flex justify-around">
      <div className="basis-4/5 text-xl">{itemName && itemName}</div>
      <div className="text-xl text-blue-700">{quantity && quantity}</div>
    </div>
  );
}

export default Item;
