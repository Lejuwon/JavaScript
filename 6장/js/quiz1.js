const image = document.querySelector("#container img");

image.addEventListener("mouseover", (e) => {
    image.src="images/pic-6.jpg";
});

image.addEventListener("mouseout", (e) => {
    image.src="images/pic-1.jpg";
});
