import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Todo() {
  const navigate = useNavigate();
  useEffect(() => {
  if(!localStorage.getItem('access_token'))
    {
      alert('로그인 해주세요');
      navigate('/');
    }
}, [navigate])

  return (
    <div>Todo</div>
  )
}

export default Todo