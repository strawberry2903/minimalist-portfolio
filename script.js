// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Change background color on click
    header.addEventListener("click", () => {
        header.style.backgroundColor = header.style.backgroundColor === "black" ? "white" : "black";
        header.style.color = header.style.color === "white" ? "black" : "white";
    });

    console.log("Portfolio loaded successfully!");
});
