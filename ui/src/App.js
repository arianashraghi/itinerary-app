import "./App.css";
import Layout from "./components/Layout/Layout";
import Itinerary from "./components/Itinerary/Itinerary";

function App() {
  return (
    <div className="App">
      <Layout>
        <Itinerary></Itinerary>
      </Layout>
    </div>
  );
}

export default App;
