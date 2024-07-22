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
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            previewContainer.innerHTML = '';
            previewContainer.appendChild(canvas);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

