import { useNavigate } from 'react-router-dom';

export const useRequestUpdateToDo = () => {
  const navigate = useNavigate();

  const requestCompletedToDo = (id, title, isCompleted) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title,
        completed: !isCompleted,
      }),
    }).then(
      setTimeout(() => {
        navigate(-1);
      }, 1000),
    );
  };

  return {
    requestCompletedToDo,
  };
};
