import React, { useState } from 'react';

const sampleProjects = [
  { id: 1, name: 'Project A', description: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Project B', description: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Project C', description: 'Sed do eiusmod tempor incididunt.' }
];

const sampleClients = [
  { id: 1, name: 'Client X', email: 'clientx@example.com' },
  { id: 2, name: 'Client Y', email: 'clienty@example.com' },
  { id: 3, name: 'Client Z', email: 'clientz@example.com' }
];

function ProjectList() {
  const [projects] = useState(sampleProjects);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClientList() {
  const [clients] = useState(sampleClients);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <h3>{client.name}</h3>
            <p>{client.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProjectList />
      <ClientList />
    </div>
  );
}

export default App;
