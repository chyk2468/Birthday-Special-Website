import React, { useState } from 'react';

const Header = () => (
    <header className="app-header">
        <h1>My Birthday Effects</h1>
    </header>
);

const ImageUploader = ({ onUpload }) => {
    return (
        <section className="upload-area">
            <div className="upload-card" onClick={() => document.getElementById('photo-upload').click()}>
                <input type="file" id="photo-upload" accept="image/*" hidden onChange={(e) => onUpload(e.target.files[0])} />
                <p>Click to upload or drag & drop</p>
            </div>
        </section>
    );
};

const EffectSelector = ({ selectedEffect, onSelect }) => {
    const effects = ['original', 'cartoon', 'sketch', 'neon'];
    return (
        <section className="effects-selector">
            <h3>Select an Effect</h3>
            <div className="effects-grid">
                {effects.map(effect => (
                    <div 
                        key={effect} 
                        className={`effect-card ${selectedEffect === effect ? 'active' : ''}`}
                        onClick={() => onSelect(effect)}
                    >
                        <span>{effect.charAt(0).toUpperCase() + effect.slice(1)}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

function App() {
  const [image, setImage] = useState(null);
  const [effect, setEffect] = useState('original');

  const handleUpload = (file) => {
      setImage(file);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
          <ImageUploader onUpload={handleUpload} />
          <EffectSelector selectedEffect={effect} onSelect={setEffect} />
      </div>
    </div>
  );
}

export default App;
