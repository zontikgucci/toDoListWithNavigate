import { useNavigate, useParams } from 'react-router-dom';
import styles from './Task.module.css';
import { useEffect, useState } from 'react';
import { useRequestDeleteToDo, useRequestUpdateToDo } from '../../hooks';

export const Task = () => {
  const [task, seTask] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { requestDeleteToDo } = useRequestDeleteToDo();
  const { requestCompletedToDo } = useRequestUpdateToDo();

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((rawResponse) => {
        if (!rawResponse.ok) {
          navigate('/no-task');
        }
        return rawResponse.json();
      })
      .then((response) => seTask(response));
  }, [id]);

  if (!task) {
    return null;
  }

  const { title, completed } = task;

  return (
    <>
      <title>Задача</title>
      <div className={styles.content}>
        <h3 className={styles.title}>Задача</h3>
        <button className={`${styles.actionButton} ${styles.back}`} onClick={() => navigate(-1)}>
          Вернуться
        </button>
        <p className={`${styles.textTask} ${completed ? styles.completed : ''}`}>{title}</p>
        <div className={styles.actions}>
          <button
            className={`${styles.actionButton} ${styles.completeButton}`}
            onClick={() => requestCompletedToDo(id, title, completed)}
          >
            {completed ? 'Not comlete' : 'Complete'}
          </button>
          <button className={`${styles.actionButton} ${styles.deleteButton}`} onClick={() => requestDeleteToDo(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
