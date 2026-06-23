import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

const PRODUCTS = [
  { category: "Robots", price: "$1200", stocked: true,  name: "Neo Assistant" },
  { category: "Robots", price: "$900",  stocked: false, name: "Cyber Droid"   },
  { category: "Robots", price: "$1800", stocked: true,  name: "Titan X Bot"   },
  { category: "Robots", price: "$2400", stocked: true,  name: "Omega AI Unit" },
  { category: "Robots", price: "$3200", stocked: false, name: "Shadow Mech"   },
  { category: "Gadgets", price: "$199", stocked: true,  name: "Smart Visor"   },
  { category: "Gadgets", price: "$299", stocked: true,  name: "Quantum Watch" },
  { category: "Gadgets", price: "$499", stocked: true,  name: "Holo Glass"    },
  { category: "Gadgets", price: "$799", stocked: false, name: "Nano Drone"    },
  { category: "Gadgets", price: "$999", stocked: true,  name: "Plasma Tablet" },
];

// Sakura petals
const PETAL_COUNT = 18;
const petals = Array.from({ length: PETAL_COUNT }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animationDuration: `${6 + Math.random() * 8}s`,
  animationDelay: `${Math.random() * 10}s`,
  size: `${10 + Math.random() * 10}px`,
}));

function App() {
  return (
    <div className="app">
      {/* Falling petals */}
      <div className="sakura-container">
        {petals.map((p) => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>

      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
