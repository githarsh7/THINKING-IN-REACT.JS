import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const QUOTES = [
  { text: "The only ones who should kill are those prepared to be killed.", author: "— Code Geass" },
  { text: "If you don't take risks, you can't create a future.", author: "— One Piece" },
  { text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.", author: "— FMA" },
  { text: "Power comes in response to a need, not a desire.", author: "— Dragon Ball Z" },
  { text: "A person grows up when he's able to overcome hardship.", author: "— Bleach" },
  { text: "The world is not beautiful. Therefore it is.", author: "— Kino's Journey" },
];

const CATEGORY_ICONS = { Robots: "🤖", Gadgets: "⚡" };

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText]     = useState("");
  const [inStockOnly, setInStockOnly]   = useState(false);
  const [isLight, setIsLight]           = useState(false);
  const [quote]                         = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

  const toggleTheme = () => {
    setIsLight((v) => {
      document.body.classList.toggle("light-mode", !v);
      return !v;
    });
  };

  // Checkbox blip sound
  const handleCheckbox = (val) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = val ? 880 : 440;
      g.gain.setValueAtTime(0.15, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
      o.start(); o.stop(ctx.currentTime + 0.15);
    } catch (_) {}
    setInStockOnly(val);
  };

  return (
    <div className="container">
      {/* WHAM impact label */}
      <div className="wham-impact">★ WHAM! ★</div>

      {/* Day/Night toggle */}
      <button className="theme-toggle" onClick={toggleTheme} title="Toggle day/night">
        {isLight ? "🌙" : "☀️"}
      </button>

      <h1>Neo Product Inventory!!</h1>

      {/* Random anime quote */}
      <div className="anime-quote">
        "{quote.text}"
        <span>{quote.author}</span>
      </div>

      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={handleCheckbox}
      />

      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        categoryIcons={CATEGORY_ICONS}
      />
    </div>
  );
};

export default FilterableProductTable;
