const ProductCategoryRow = ({ category, icon }) => (
  <tr className="category-row">
    <th colSpan="2">{icon} {category}</th>
  </tr>
);

export default ProductCategoryRow;
