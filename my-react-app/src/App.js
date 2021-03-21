import TodoList from './TodoList';

function App() {
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add</button>
    <button>Clear Complete</button>
    <div>
      left: <span>0</span>
    </div>
    </>
  );
}

export default App;
