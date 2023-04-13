import ItemCard from "./ItemCard";

const ItemList = ({ items, deleteProduct, updateProduct }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
      }}
    >
      {items.map((item) => {
        return (
          <ItemCard
            item={item}
            key={item.id}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
