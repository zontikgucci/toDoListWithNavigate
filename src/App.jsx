import { Routes, Route } from 'react-router-dom';
import { Tasks, Task, NotTask, NotFoundPage } from './components';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/no-task" element={<NotTask />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
