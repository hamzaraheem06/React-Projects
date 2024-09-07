import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  let [length, setlength] = useState("8");
  let [inclNumber, setInclNumber] = useState(false);
  let [inclCharacter, setInclCharacter] = useState(false);
  let [password, setPassword] = useState("");

  let passwordGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (inclNumber) {
      str += "0123456789";
    }

    if (inclCharacter) {
      str += "!#$%&()*@";
    }

    for (let i = 1; i <= length; i++) {
      let randIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randIndex);
    }

    setPassword(pass);
  }, [length, inclCharacter, inclNumber]);

  let copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordInputRef.current?.select();
    passwordInputRef.current?.setSelectionRange(0, length);
  };

  let passwordInputRef = useRef(null);

  useEffect(() => {
    passwordGen();
  }, [length, inclCharacter, inclNumber, passwordGen]);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="text-3xl font-bold font text-slate-200">
        Random Password Generator
      </h1>
      <div className="bg-purple-400 py-4 min-h-48 px-6 rounded-md flex flex-col items-center justify-center gap-3">
        <div className="bg-slate-100 w-full rounded-lg overflow-hidden flex justify-between">
          <input
            type="text"
            value={password}
            readOnly
            className="bg-transparent outline-none flex-grow text-gray-900 text-lg pl-3 pr-2"
            placeholder="Password"
            ref={passwordInputRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-purple-500 h-full text-slate-200 px-3 text-lg py-2 flex gap-1 items-center "
          >
            <span>Copy</span> <i className="bx bx-copy"></i>
          </button>
        </div>

        <div className="flex gap-3">
          <div className="flex gap-2 items-center">
            <input
              defaultValue={8}
              type="range"
              min={8}
              max={64}
              className="w-28"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-gray-950 text-lg">length: ({length})</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              defaultChecked={inclNumber}
              type="checkbox"
              className="w-4 h-4"
              onClick={() => {
                setInclNumber((prev) => !prev);
              }}
            />
            <label className="text-gray-950 text-lg"> Numbers </label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              defaultChecked={inclCharacter}
              type="checkbox"
              className="w-4 h-4"
              onClick={() => {
                setInclCharacter((prev) => !prev);
              }}
            />
            <label className="text-gray-950 text-lg"> Characters </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
