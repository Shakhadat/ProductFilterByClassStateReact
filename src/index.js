import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FilterableProductTable from "./components/FilterableProductTable";
import reportWebVitals from "./reportWebVitals";

const PRODUCTS = [
  { price: "$3.10", stocked: true, name: "shaftoli" },
  { price: "$4.10", stocked: false, name: "olma" },
  { price: "$3.19", stocked: true, name: "uzum" },
  { price: "$4.10", stocked: true, name: "banan" },
  { price: "$3.90", stocked: false, name: "kiwi" },
  { price: "$9.19", stocked: true, name: "anor" },
  { price: "$9.10", stocked: true, name: "behi" },
  { price: "$3.50", stocked: false, name: "nok" },
  { price: "$3.10", stocked: false, name: "anjir" },
];

ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
