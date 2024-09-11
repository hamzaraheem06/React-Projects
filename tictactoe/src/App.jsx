import { useState } from "react";

// it is a square component. it is taking props i.e. value and onClick from the parent component Board. Value is the value to be render in the UI, and onClick (handleClick) is a method that handles when a user click on any of the square
function Square({ value, onClick }) {
  return (
    <>
      <button
        className="border border-slate-800 bg-green-600 text-white text-3xl font-bold px-8 py-7 w-24 h-24"
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
}

// this is the parent component that containes all the app, that would render on the  browser.
function Board() {
  // this state containes an array that containes all the values of the respectives square. e.g squares[0] represents the value of the first square.
  let [squares, setSquares] = useState(Array(9).fill(null));

  // this function handles the rendering of the X's and O's when a user clicks on the square.
  // to track which <Square> is clicked, we pass an i prop from the parent container as can be seen in line 37.
  function handleClick(i) {
    let squaresCopy = squares.slice(0, squares.length); // this creates a copy of the original array, which will be used later to reset the game. I guess.
    squaresCopy[i] = "X";
    setSquares(squaresCopy); // this is called when we need to re-render value of the squares.
  }

  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <div className="flex">
          {/* the props are passed from here */}
          <Square
            value={squares[0]}
            onClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onClick={() => {
              handleClick(2);
            }}
          />
        </div>

        <div className="flex">
          <Square
            value={squares[3]}
            onClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onClick={() => {
              handleClick(5);
            }}
          />
        </div>

        <div className="flex">
          <Square
            value={squares[6]}
            onClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Board; // this line exports the App so that it could be rendered in the UI using main.jsx file
