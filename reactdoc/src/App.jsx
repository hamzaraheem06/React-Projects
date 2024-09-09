import Signup from "./components/signuppage";
import Login from "./components/loginpage";
import "./index.css";

function App() {
  let hasAccount = false;
  return (
    <>
      <div>{hasAccount ? <Login /> : <Signup />}</div>
    </>
  );
}

export default App;
