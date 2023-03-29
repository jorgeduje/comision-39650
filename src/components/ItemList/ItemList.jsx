
const ItemList = ( {saludo, edad} ) => {

  // let { edad, saludo } = props

  return (
    <div>
      <h1>ItemList</h1>
      <h2>{saludo}</h2>
      <h2>{edad}</h2>
    </div>
  );
};

export default ItemList;
