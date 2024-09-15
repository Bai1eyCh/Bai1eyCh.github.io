document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    for (const image of images) {
        fetch("https://picsum.photos/500/300")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.blob(); // Get the image as a blob
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                image.src = url;
                image.width = 500; // Set the width of the image
                image.height = 300; // Set the height of the image
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }
});
