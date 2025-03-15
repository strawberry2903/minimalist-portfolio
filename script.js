const projects = [
    { name: "Minimalist Portfolio", link: "https://strawberry2903.github.io/minimalist-portfolio/" },
    { name: "🚧 Coming Soon!", link: "#" }
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    const projectElement = document.createElement("p");
    projectElement.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a>`;
    projectsContainer.appendChild(projectElement);
});
