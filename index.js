const image = document.querySelectorAll("img");

image.forEach(img => {
    if (!(img.parentNode.classList.contains("block_small"))) {
        img.style = `width: ${img.naturalWidth * 0.0625}rem;`;
    }
});