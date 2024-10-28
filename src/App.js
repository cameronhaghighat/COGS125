import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Portfolio Section */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My Portfolio</h1>
        <section style={{ margin: '40px 0' }}>
          <h2>About Me</h2>
          <p>
            Hi! I'm Cameron Haghighat, a UX Designer and Developer passionate about creating
            digital experiences that bring ideas to life. I strive to make designs that
            are both functional and beautiful.
          </p>
        </section>

        <section style={{ margin: '40px 0' }}>
          <h2>Projects</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Project
              title="Project 1"
              description="Description of Project 1"
              link="#"
            />
            <Project
              title="Project 2"
              description="Description of Project 2"
              link="#"
            />
            <Project
              title="Project 3"
              description="Description of Project 3"
              link="#"
            />
          </div>
        </section>

        <footer style={{ marginTop: '40px' }}>
          <p>Connect with me:</p>
          <a href="https://www.linkedin.com/in/cameronhaghighat" target="_blank" rel="noreferrer">
            LinkedIn
          </a> | 
          <a href="https://github.com/cameronhaghighat" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}

function Project({ title, description, link }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '5px',
      width: '200px',
      textAlign: 'left',
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">View Project</a>
    </div>
  );
}

export default App;
export default App;
