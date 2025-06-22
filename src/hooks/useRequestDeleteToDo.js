import { useNavigate } from 'react-router-dom';

export const useRequestDeleteToDo = () => {
  const navigate = useNavigate();

  const requestDeleteToDo = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    }).then((rawResponse) => {
      if (!rawResponse.ok) {
        navigate('/letion-error');
      }
      navigate(-1);
    });
  };

  return {
    requestDeleteToDo,
  };
};
