import { useState } from "react";

// it is a square component. it is taking props i.e. value and onClick from the parent component Board. Value is the value to be render in the UI, and onClick (handleClick) is a method that handles when a user click on any of the square, it handles the rendering of game's move.
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
function Board({ xIsNext, squares, onPlay }) {
  const squaresCopy = squares.slice(); // the name justifies what this statement does. It creates a copy of the original array. The copied array is what will be rendered on the UI

  // this function handles the rendering of the X's and O's when a user clicks on the square. To track which <Square> is clicked, we pass an i prop from the parent container as can be seen in line 37.
  function handleClick(i) {
    // the following if statement checkes that if the square has already been filled or not or the game has ended . If the square is already filled or game has ended, it will exit from the handleClick function without doing anything.
    if (squaresCopy[i] !== null || calculateWinner(squares)) {
      return;
    }

    // the following if and else will alternate the turns.
    if (xIsNext) {
      squaresCopy[i] = "X";
    } else {
      squaresCopy[i] = "O";
    }
    onPlay(squaresCopy); // this is called when we need to re-render value of the squares.
  }

  // this part work on displaying who is the winner

  let status; // It guides the players, and displays the winning message.
  let winner = calculateWinner(squares); // this is called after every move to check the winner. The squares param is the array containing the current state of the game. It is passed from the Game component.

  if (winner !== null) {
    status = `${winner} is the winner!`;
  } else {
    status = `It is ${xIsNext ? "X" : "O"} \'s turn`;
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-4xl font-bold  text-white">{status}</div>
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
  // the lines array containes all the possible winning combination of the game.
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

  // this loop takes the all the winning combos one by one, and checks if the values on the that particular squares are same or not, if they are same it will return the value i.e. X or O, else it will return null marking game not finished or a draw.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game() {
  let [xIsNext, setXIsNext] = useState(true); // contains the track of turn of players.
  let [history, setHistory] = useState([Array(9).fill(null)]); // this is what makes the timeline functionality work. It containes an array, which contains all the record of moves in the form of array.
  let [currentMove, setCurrentMove] = useState(0); // the name is enough
  let currentSquares = history[currentMove]; // name is enough for this too.

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // this stores the new array array when a player makes a turn.
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); //
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  } // function that is called when we clicked on any state of the game.

  // this converts the current move history into a li elements to display them in the ul in line 184
  let moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="pl-10 font-bold text-base font-mono">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex gap-4 items-end justify-center">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      <div className="w-72 h-72 bg-green-600 ">
        <h1 className="text-3xl font-bold text-white text-center">
          Game's History
        </h1>
        <ul className=" list-none pt-1">{moves}</ul>
      </div>
    </div>
  );
}

export default Game; // this line exports the App so that it could be rendered in the UI using main.jsx file
