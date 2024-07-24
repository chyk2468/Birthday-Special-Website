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

function App() {
  const [image, setImage] = useState(null);

  const handleUpload = (file) => {
      setImage(file);
      console.log("Image state updated:", file.name);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
          <ImageUploader onUpload={handleUpload} />
      </div>
    </div>
  );
}

export default App;
