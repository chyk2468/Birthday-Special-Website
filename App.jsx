import React, { useState, useEffect, useRef } from 'react';

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

const ImageCanvas = ({ image, effect }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!image || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
             canvas.width = img.width;
             canvas.height = img.height;
             ctx.drawImage(img, 0, 0);
             if (effect === 'cartoon') {
                  ctx.filter = 'contrast(1.2) saturate(1.5) blur(1px)';
                  ctx.drawImage(canvas, 0, 0);
                  ctx.filter = 'none';
             } else if (effect === 'sketch') {
                  ctx.filter = 'grayscale(1) contrast(3) invert(1)';
                  ctx.drawImage(canvas, 0, 0);
                  ctx.filter = 'none';
             }
        };
        img.src = URL.createObjectURL(image);
    }, [image, effect]);

    return (
        <section className="preview-container">
            <canvas ref={canvasRef} />
        </section>
    );
};

function App() {
  const [image, setImage] = useState(null);
  const [effect, setEffect] = useState('original');

  const onImageChange = (file) => {
      setImage(file);
      setEffect('original'); // Reset on new image
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
          <ImageUploader onUpload={onImageChange} />
          {image && <ImageCanvas image={image} effect={effect} />}
          <EffectSelector selectedEffect={effect} onSelect={setEffect} />
      </div>
    </div>
  );
}

export default App;
