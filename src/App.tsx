import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import UserPage from "./components/UserPage";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return <>{token === "" ? <Login /> : <UserPage token={token} />}</>;
};

export default App;
