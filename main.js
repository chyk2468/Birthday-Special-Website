const uploadArea = document.getElementById('upload-area');
const photoUpload = document.getElementById('photo-upload');

uploadArea.addEventListener('click', () => {
    photoUpload.click();
});

photoUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImage(file);
    }
});

const previewContainer = document.getElementById('preview-container');

function handleImage(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
             // Robust rendering logic
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);
            previewContainer.innerHTML = '';
            previewContainer.appendChild(canvas);
        };
        img.onerror = () => console.error("Error loading image");
        img.src = event.target.result;
        
        // Ensure onload triggers if cached (rare for FileReader but good practice)
        if (img.complete && img.naturalWidth !== 0) {
            img.onload();
        }
    };
    reader.readAsDataURL(file);
}

let currentImageData = null;

function applyGrayscale(ctx, width, height) {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
    }
    ctx.putImageData(imageData, 0, 0);
}

function applyNeon(canvas, ctx) {
    ctx.filter = 'contrast(1.5) brightness(1.2) saturate(2)';
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = 'none';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#6366f1';
}
const effectsGrid = document.getElementById('effects-grid');

function applyEffect(canvas, effect) {
    const ctx = canvas.getContext('2d');
    switch (effect) {
        case 'neon': applyNeon(canvas, ctx); break;
        case 'grayscale': applyGrayscale(ctx, canvas.width, canvas.height); break;
        // add more cases as they're built...
    }
}

effectsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.effect-card');
    if (!card) return;
    const canvas = previewContainer.querySelector('canvas');
    if (canvas) applyEffect(canvas, card.dataset.effect);
});

