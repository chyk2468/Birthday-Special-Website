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
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (!image || !canvasRef.current) return;
        setIsProcessing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
             const dpr = window.devicePixelRatio || 1;
             canvas.width = img.width * dpr;
             canvas.height = img.height * dpr;
             canvas.style.width = `${img.width}px`;
             canvas.style.height = `${img.height}px`;
             ctx.scale(dpr, dpr);
             ctx.drawImage(img, 0, 0);
             setTimeout(() => setIsProcessing(false), 500);
        };
        img.src = URL.createObjectURL(image);
    }, [image, effect]);

    const downloadProject = () => {
        const link = document.createElement('a');
        link.download = 'birthday-effect.png';
        link.href = canvasRef.current.toDataURL();
        link.click();
    };

    return (
        <section className="preview-container">
            {isProcessing && <div className="spinner">Applying magic...</div>}
            <canvas ref={canvasRef} style={{ display: isProcessing ? 'none' : 'block' }} />
            {!isProcessing && <button onClick={downloadProject}>Download Magic ✨</button>}
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
