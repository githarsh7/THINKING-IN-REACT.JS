// Power bar: map price string to a width (10–70px)
const getPowerWidth = (price) => {
  const num = parseInt(price.replace(/\D/g, ""), 10) || 100;
  const clamped = Math.min(Math.max(num, 100), 3500);
  return Math.round(((clamped - 100) / (3500 - 100)) * 60 + 10);
};

const ProductRow = ({ product }) => {
  const pw = getPowerWidth(product.price);

  return (
    <tr className="product-row">
      <td className={!product.stocked ? "red" : ""}>
        {product.name}
        {!product.stocked && <span className="sold-out-badge">SOLD OUT</span>}
      </td>
      <td>
        <div className="power-bar-wrap">
          <div className="power-bar" style={{ width: pw }} />
          <span className="power-label">{product.price}</span>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
