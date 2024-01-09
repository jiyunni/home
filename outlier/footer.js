document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('footer');
    const footerPath = footerContainer.getAttribute('data-include-path');

    if (footerPath) {
        fetch(footerPath)
            .then(response => response.text())
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => console.error('Error fetching footer:', error));
    }
});
