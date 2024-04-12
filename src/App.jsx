// App.jsx
import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Components/Todo';
import TodoPage from './Components/TodoPage';
import todoContext from './context/context';

function App() {
  const [allTodo, setAllTodo] = useState([]);

  return (
    <todoContext.Provider value={{ allTodo, setAllTodo }}>
      <Router>
        <Routes>
          <Route path="/TodoPage" element={<TodoPage />} />
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </todoContext.Provider>
  );
}

export default App;