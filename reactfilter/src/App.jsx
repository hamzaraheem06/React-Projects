import { useState } from "react";

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function ProductRow({ product }) {
  return (
    <div className="w-full flex justify-between">
      <p className="font-medium font-xl text-slate-800">{product.name}</p>
      <p className="font-medium font-xl text-green-700">{product.price}</p>
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <div className="w-full text-center text-2xl text-slate-900">{category}</div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between ">
        <h1 className="text-slate-800 text-3xl font-bold">Name</h1>
        <h1 className="text-slate-800 text-3xl font-bold">Price</h1>
      </div>
      <div className="">{rows}</div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="w-full flex flex-col gap-3 items-start ">
      <input
        className="w-full text-slate-800 rounded-md bg-emerald-100 px-4 py-2 text-xl border-solid shadow-md border-slate-800"
        type="text"
        placeholder="Search..."
        autoComplete="off"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-6 h-6 bg-blue-600 checked:bg-green-600"
        />
        <p className="text-base text-slate-700">Only show available products</p>
      </label>
    </div>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div className="w-80 bg-purple-400 px-3 py-2 rounded-sm">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function App() {
  return <FilterableProductTable products={products} />;
}

export default App;
