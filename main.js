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

function handleImage(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        console.log("Image loaded", event.target.result);
        // Next commit: render to canvas
    };
    reader.readAsDataURL(file);
}

