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

  let [xIsNext, setXIsNext] = useState(true);

  // this function handles the rendering of the X's and O's when a user clicks on the square.
  // to track which <Square> is clicked, we pass an i prop from the parent container as can be seen in line 37.
  function handleClick(i) {
    let squaresCopy = squares.slice(0, squares.length); // this creates a copy of the original array, which will be used later to reset the game. I guess.

    // this checkes that if the square has already been filled or not. if the square is already filled it will exit from the function without doing anything.
    if (squaresCopy[i] !== null || calculateWinner(squares)) {
      return;
    }

    // the following if and else will alternate the turns.
    if (xIsNext) {
      squaresCopy[i] = "X";
    } else {
      squaresCopy[i] = "O";
    }
    setSquares(squaresCopy); // this is called when we need to re-render value of the squares.

    setXIsNext(!xIsNext); // this statement will continously flip the turn state
  }

  // this part work on displaying who is the winner

  let status;
  let winner = calculateWinner(squares);

  if (winner !== null) {
    status = `${winner} is the winner!`;
  } /* else if (winner === null) {
    status = `It is a draw`;
  } */ else {
    status = `It is ${xIsNext ? "X" : "O"} \`s turn`;
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-4xl font-bold  text-blue-600">{status}</div>
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
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board; // this line exports the App so that it could be rendered in the UI using main.jsx file
