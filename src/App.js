
import TodoIndex from "./components/TodoIndex";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      
       <h1 className="text-center">TodoMatic</h1> 
    
      
        <Todos />
        <TodoIndex />

    </div>
  );
}

export default App;