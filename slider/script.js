const images = [
    "https://img.freepik.com/premium-photo/1-written-one-written-3d-text-white-background_181020-4922.jpg",
    "https://img.freepik.com/free-psd/silver-number-2-blue-style-3d-render_47987-12616.jpg"
];

let i = 0;

function showImage(index) {
    const imgElement = document.getElementById("slider-img");
    imgElement.src = images[index];
}

function previous() {
    i = (i - 1 + images.length) % images.length;
    showImage(i);
}

function next() {
    i = (i + 1) % images.length;
    showImage(i);
}
