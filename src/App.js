import "./App.css";
import { useState } from "react";

function App() {
  // creating states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>Submit form from react to php</h1>
          <br />

          <form action="#">
            <input type="text" name="username" id="username" placeholder="Enter username..." value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
            <br />
            <input type="text" name="email" id="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password" name="password" id="password" placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
