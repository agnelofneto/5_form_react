import "./App.css";
import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "bruno", email: "bruno@sapo.pt" , bio:"Sou um Consultor" , role:"admin"}} />
    </div>
  );
}

export default App;
