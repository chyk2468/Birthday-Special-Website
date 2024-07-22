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

