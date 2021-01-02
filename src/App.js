import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <h1>User App</h1>

      <hr />
      <User name="Oğuzhan Özavcı" salary="5900" department="BT Uygulama" />
      <User name="Ahmet Kural" department="BT Uygulama" />
    </div>
  );
}

export default App;
