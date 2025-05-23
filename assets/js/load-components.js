document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header.html", "header-container");
    loadComponent("footer.html", "footer-container");
});

function loadComponent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

function updateCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}
updateCurrentYear()