import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

const PRODUCTS = [
  {
    category: "Robots",
    price: "$1200",
    stocked: true,
    name: "Neo Assistant",
  },
  {
    category: "Robots",
    price: "$900",
    stocked: false,
    name: "Cyber Droid",
  },
  {
    category: "Robots",
    price: "$1800",
    stocked: true,
    name: "Titan X Bot",
  },
  {
    category: "Robots",
    price: "$2400",
    stocked: true,
    name: "Omega AI Unit",
  },
  {
    category: "Robots",
    price: "$3200",
    stocked: false,
    name: "Shadow Mech",
  },
  {
    category: "Gadgets",
    price: "$199",
    stocked: true,
    name: "Smart Visor",
  },
  {
    category: "Gadgets",
    price: "$299",
    stocked: true,
    name: "Quantum Watch",
  },
  {
    category: "Gadgets",
    price: "$499",
    stocked: true,
    name: "Holo Glass",
  },
  {
    category: "Gadgets",
    price: "$799",
    stocked: false,
    name: "Nano Drone",
  },
  {
    category: "Gadgets",
    price: "$999",
    stocked: true,
    name: "Plasma Tablet",
  },
];

function App() {
  return (
    <div className="app">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;