import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  useEffect(() => {
    fetch("http://localhost/itinerary", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
        </header>
      </div>
    </Layout>
  );
}

export default App;
