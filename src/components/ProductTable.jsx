import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let previousCategory = null;

  products.forEach((product, index) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== previousCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );

      previousCategory = product.category;
    }

    rows.push(<ProductRow product={product} key={index} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;