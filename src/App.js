import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/background.jpeg';
import api from './services/api';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response);
      setProjects(response.data);
    })
  }, []);

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
            <li key={project.id}>{project.title}</li>
            ))
          }
      </ul>
      <img width={300} src={backgroundImage}/>
    </>
  );
}

export default App;
