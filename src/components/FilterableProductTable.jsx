import  { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="container">
      <h1
        style={{
          marginBottom: "25px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Neo Product Inventory!!
      </h1>

      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />

      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;