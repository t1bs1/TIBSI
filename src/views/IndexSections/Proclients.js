import React, { useState } from 'react';
import { Container } from 'reactstrap';

const sampleProjects = [
  { id: 1, name: 'Project A', description: 'Lorem ipsum dolor sit amet.', image: 'https://picsum.photos/id/237/200/300' },
  { id: 2, name: 'Project B', description: 'Consectetur adipiscing elit.', image: 'https://picsum.photos/id/238/200/300' },
  { id: 3, name: 'Project C', description: 'Sed do eiusmod tempor incididunt.', image: 'https://picsum.photos/id/239/200/300' }
];

const sampleClients = [
  { id: 1, name: 'Client X', email: 'clientx@example.com', image: 'https://picsum.photos/id/240/200/200' },
  { id: 2, name: 'Client Y', email: 'clienty@example.com', image: 'https://picsum.photos/id/241/200/200' },
  { id: 3, name: 'Client Z', email: 'clientz@example.com', image: 'https://picsum.photos/id/242/200/200' }
];

function ProjectList() {
    const [projects] = useState(sampleProjects);
  
    return (
      <div>
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

  function ClientList() {
    const [clients] = useState(sampleClients);
  
    return (
      <div>
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <img src={client.image} alt={client.name} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>{client.name}</h3>
                <p>{client.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

function App() {
  return (
    <Container>
    <div className="app">
      <header>
        <h1>Company Name</h1>
      </header>
      <main>
        <ProjectList />
        <ClientList />
      </main>
    </div>
    </Container>
  );
}

export default App;
