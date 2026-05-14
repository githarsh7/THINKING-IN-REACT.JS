const ProductRow = ({ product }) => {
  return (
    <tr className="product-row">
      <td className={!product.stocked ? "red" : ""}>
        {product.name}
      </td>

      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;