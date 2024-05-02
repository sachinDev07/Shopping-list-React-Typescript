import Item from "../Item/Item";

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
            <Item
              key={item?.id}
              itemName={item?.name}
              quantity={item?.quantity}
            />
          );
        })}
    </div>
  );
}

export default ItemList;
