import axios from 'axios';

export interface Itodos {
  "id": number,
  "todo": string,
  "isCompleted": boolean,
  "userId": number,
}

export async function createTodos(todoInput: string): Promise<{ok: boolean; data?: Array<Itodos>}> {
  const access_token = localStorage.getItem('access_token');
  try {
  const res = await axios.post( 
    'https://pre-onboarding-selection-task.shop/todos',
    { 
      todo: todoInput
    },
    { 
      headers: { 
        'Authorization': access_token, 
        'content-type': 'application/json'
      } 
    } 
  )
  const data = res.data as Array<Itodos>;
  return { ok: true, data};
  } catch (error) {
    console.log(error);
    return {ok: false};
  } 
}

export async function getTodos(): Promise<{ok: boolean; data?: Array<Itodos>}> {
  const access_token = localStorage.getItem('access_token');
  try {
  const res = await axios.get( 
    'https://pre-onboarding-selection-task.shop/todos',
    { 
      headers: { 
        'Authorization': access_token, 
      } 
    } 
  )
  const data = res.data as Array<Itodos>;
  return { ok: true, data};
  } catch (error) {
    console.log(error);
    return {ok: false};
  } 
}