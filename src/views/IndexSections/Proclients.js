import React, { useState } from 'react';
import { Container } from 'reactstrap';
import App from './App';

const sampleProjects = [
  { id: 1, 
    name: 'Donation Drive for student of Magdolinog Elem. School.', 
    description: 'Donate School supplies to the elementary students of Magdolinog Elem. School Borbon Cebu.', 
    image: 'https://www.astro-foundation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgtigz0nv%2Fimage%2Fupload%2Fv1669365535%2Fviber_image_2022_10_24_11_34_03_527_9213f160d3.jpg&w=3840&q=75' 
  },
  { id: 2, 
    name: 'Community Outreach at DepEd Cebu Province', 
    description: 'The foundation donated bond paper to help teachers in DepEd Lapu-Lapu and Cebu Province print learning materials for distance learning during the pandemic, as they have limited funds.', 
    image: 'https://www.astro-foundation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgtigz0nv%2Fimage%2Fupload%2Fv1666929320%2Fviber_image_2022_10_24_11_42_48_326_4e2578b849.jpg&w=3840&q=75' 
  },
  
  { id: 3, 
    name: 'Community Outreach - Typhoon Odette Victims', 
    description: 'To distribute relief goods to families affected by the typhoon Odette in Borbon, Cebu.', 
    image: 'https://www.astro-foundation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgtigz0nv%2Fimage%2Fupload%2Fv1666929532%2Fviber_image_2022_08_05_10_29_13_438_2cec32bb5a.jpg&w=3840&q=75' 
  }
];

const sampleClients = [
  { id: 1, 
    name: 'Client X', 
    email: 'clientx@example.com', 
    image: 'https://www.astro-foundation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgtigz0nv%2Fimage%2Fupload%2Fv1666788782%2F1_3eccb316f6.jpg&w=3840&q=75' 
  },
  { id: 2, 
    name: 'Client Y', 
    email: 'clienty@example.com', 
    image: 'https://www.astro-foundation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgtigz0nv%2Fimage%2Fupload%2Fv1666835181%2FMicrosoft_Teams_image_4_4bdfa60627.jpg&w=3840&q=75' 
  },
  { id: 3, 
    name: 'Client Z', 
    email: 'clientz@example.com', 
    image: 'https://www.astro-foundation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgtigz0nv%2Fimage%2Fupload%2Fv1666859869%2Fviber_image_2022_10_24_11_42_50_500_fe8de5427d.jpg&w=3840&q=75' 
  }
];

function ProjectList() {
  const [projects] = useState(sampleProjects);

  return (
    <div className="project-list">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.name} />
          <div className="overlay">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <a href="#">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
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
    <div className="client-list">
      {clients.map(client => (
        <div key={client.id} className="client-card">
          <img src={client.image} alt={client.name} />
          <div className="overlay">
            <h3>{client.name}</h3>
            <p>ID: {client.id}</p>
            <p>Email: {client.email}</p>
            <div className="button-container">
              <a href="#">
                Contact <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Proclient() {
  return (
    <Container>
      <header>
        <center>
        <h1><strong>Astro Charitable and Scholarship Foundation, Inc.</strong></h1>
        </center>
      </header>
        <ProjectList />
        <ClientList />
        <App />
    </Container>
  );
}

export default Proclient;
