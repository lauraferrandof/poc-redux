import React from 'react';

import ToDosList from './features/toDos/ToDosList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My to-do app</h1>
      </header>
      <main>
        <ToDosList />
      </main>
    </div>
  );
}

export default App;
