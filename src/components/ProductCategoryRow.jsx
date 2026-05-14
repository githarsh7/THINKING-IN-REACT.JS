const ProductCategoryRow = ({ category }) => {
  return (
    <tr className="category-row">
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;