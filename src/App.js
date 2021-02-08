import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects"/>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      <ul>
        {
          projects.map(project => (
            <li key={project}>{project}</li>
          ))
        }
      </ul>

    </>
  );
}

export default App;
