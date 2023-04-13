const ProductTableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
  );
};

const ProductTableBody = ({ products }) => {
  return (
    <tbody>
      {products.map((element, index) => (
        <tr key={index}>
          <td style={{ color: element.stocked ? "black" : "red" }}>
            {element.name}
          </td>
          <td>{element.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

const ProductTable = ({
  products,
  searchTerm,
  stockedOnly,
  vegetablesOnly,
  fruitsOnly,
}) => {
  let filteredProducts = products.filter((element) =>
    element.name.toLowerCase().includes(searchTerm)
  );

  // When stocked only is checked
  if (stockedOnly) {
    filteredProducts = filteredProducts.filter((element) => element.stocked);
  }

  // When Vegetables only is checked
  if (vegetablesOnly) {
    filteredProducts = filteredProducts.filter(
      (element) => element.category === "Vegetables"
    );
  }

  if (fruitsOnly) {
    filteredProducts = filteredProducts.filter(
      (element) => element.category === "Fruits"
    );
  }

  return (
    <table style={{ minWidth: "32rem" }}>
      <ProductTableHeader />
      <ProductTableBody products={filteredProducts} />
    </table>
  );
};

export default ProductTable;
