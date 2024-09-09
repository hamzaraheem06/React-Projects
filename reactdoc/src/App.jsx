import Signup from "./components/signuppage";
import Login from "./components/loginpage";
import "./index.css";

import { useState } from "react";

let bestSellingProducts = [
  {
    productImage: "./bestsellingproducts/product1.png",
    productName: "The north coat",
    discountedPrice: "$260",
    acutalPrice: "$370",
    itemsSold: 65,
    id: 1,
  },
  {
    productImage: "./bestsellingproducts/product2.png",
    productName: "Gucci duffle bag",
    discountedPrice: "$960",
    acutalPrice: "$1160",
    itemsSold: 75,
    id: 2,
  },
  {
    productImage: "./bestsellingproducts/product3.png",
    productName: "RGB liquid CPU Cooler",
    discountedPrice: "$160",
    acutalPrice: "$170",
    itemsSold: 65,
    id: 3,
  },
  {
    productImage: "./bestsellingproducts/product4.png",
    productName: "Small BookSelf",
    discountedPrice: "$370",
    acutalPrice: "$400",
    itemsSold: 99,
    id: 4,
  },
];

function MyButton() {
  let [count, setCount] = useState(0);

  function clickHandle(e) {
    count += 1;
    setCount(count);
    console.log(`Button was clicked ${count} times`);
  }

  return (
    <>
      <button className="product-button" onClick={clickHandle}>
        My Button was clicked {count}
      </button>
    </>
  );
}

function App() {
  // adding lists in react
  // let bestSellingProductsConverted = bestSellingProducts.map((product) => {
  //   return (
  //     <div className="product" key={product.id}>
  //       <div className="product-img">
  //         <img
  //           loading="lazy"
  //           src={product.productImage}
  //           alt={product.productName}
  //         />
  //       </div>
  //       <div className="product-info ">
  //         <p className="product-name">{product.productName}</p>
  //         <div className="price-section">
  //           <div className="discounted-price">{product.discountedPrice}</div>
  //           <p className="actual-price">{product.acutalPrice}</p>
  //         </div>
  //         <div className="product-sold">
  //           <span>Items sold:</span> (<span>{product.itemsSold}</span>)
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  // return (
  //   <>
  //     <div>{bestSellingProductsConverted}</div>
  //   </>
  // );
  // handling events in react
  return (
    <>
      <MyButton />
      <MyButton />
    </>
  );
}

export default App;
