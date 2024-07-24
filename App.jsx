import React from 'react';

const Header = () => (
    <header className="app-header">
        <h1>My Birthday Effects</h1>
    </header>
);

const Hero = () => (
    <main className="hero-section">
        <div className="container">
            <h2>Give Your Photos a Birthday Magic!</h2>
            <p>Upload your memories and apply stunning visual effects.</p>
        </div>
    </main>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
