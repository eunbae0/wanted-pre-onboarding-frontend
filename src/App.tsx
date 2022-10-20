
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import Todo from './pages/todo';

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Auth />} 
      />
      <Route 
        path="/todo" 
        element={<Todo />} 
      />
    </Routes>
  );
}

export default App;
