import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly, categoryIcons }) => {
  const rows = [];
  let previousCategory = null;

  products.forEach((product, index) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if (inStockOnly && !product.stocked) return;

    if (product.category !== previousCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          icon={categoryIcons?.[product.category] ?? "✦"}
          key={product.category}
        />
      );
      previousCategory = product.category;
    }

    rows.push(<ProductRow product={product} key={index} />);
  });

  if (rows.length === 0) {
    return (
      <div className="empty-state">
        <span className="chibi">(´；ω；`)</span>
        <strong>０件 — NOTHING FOUND!</strong>
        <p>No items match your search, warrior.</p>
      </div>
    );
  }

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
