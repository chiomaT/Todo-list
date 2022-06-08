import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./components/TodoProvider";


function App() {
  return (
    <div className = "App">
      <header>
      <h1>TODO LIST</h1>
      </header>
    <TodoProvider>
      <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  
  );
}

export default App;
