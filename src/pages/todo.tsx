import { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';

import { Itodos, createTodos, getTodos } from '../api/todo';

function TodoList({ todoContents }: { todoContents: string }) {
  const onClickeditBtn = () => {
    
  };
  const onClickdeleteBtn = () => {

  };
  return (
    <div className="flex justify-between w-48 h-20 p-8">
      <div>
        <input type="checkbox"></input>
        <p>{todoContents}</p>
      </div>
      <div>
        <button type="button" onClick={onClickeditBtn}>Edit</button>
        <button type="button" onClick={onClickdeleteBtn}>Delete</button>
      </div>
    </div>
  )
}

function Todo() {
  const navigate = useNavigate();
  useEffect(() => {
  if(!localStorage.getItem('access_token'))
    {
      alert('로그인 해주세요');
      navigate('/');
    }
}, [navigate])

  const createTodoInputRef = useRef<HTMLInputElement>(null);
  const onSubmitCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoInput = createTodoInputRef.current?.value as string;
    createTodos(todoInput);
  };

  const [todos, setTodos] = useState<Array<Itodos>>([]);
  useEffect(() => {
    getTodos();
    setTodos(getTodos.data);
  }, [])

  return (
    <div className="w-full h-screen">
      <div className="w-1/2 mx-auto my-0">
        <div className="mt-40 w-full h-56 bg-gray-100 px-8 py-10 flex flex-col justify-between">
          <form onSubmit={onSubmitCreateTodo} className="flex justify-between">
            <input type="text" ref={createTodoInputRef} className="p-4" placeholder="투두 내용을 입력하세요" />
            <button type="submit" className="">입력</button>
          </form>
          <div className="flex flex-col">
            {todos.map(todos => <TodoList todoContents="" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo