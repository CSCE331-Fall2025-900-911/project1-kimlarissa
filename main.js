function toggleStyleSheet() {
    var styleElement = document.getElementById('mainStylesheet');
    
    const currentHref = styleElement.getAttribute('href');

    if (currentHref === 'styles.css') {
        styleElement.setAttribute('href', 'league_styles.css');
        localStorage.setItem('currentTheme', 'league_styles.css');
    } else {
        styleElement.setAttribute('href', 'styles.css');
        localStorage.setItem('currentTheme', 'styles.css');
    }
}

window.onload = function() {
    const savedTheme = localStorage.getItem('currentTheme');
    if (savedTheme) {
        const styleElement = document.getElementById('mainStylesheet');
        styleElement.href = savedTheme;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const selectionItems = document.querySelectorAll('.selection-item');

    const titleElement = document.getElementById('project-title');
    const summaryElement = document.getElementById('project-summary');
    const featuresElement = document.getElementById('project-features');
    const imageElement = document.getElementById('project-image');
    const linkElement = document.getElementById('project-link');

    selectionItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            selectionItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');

            titleElement.textContent = this.dataset.title;
            summaryElement.textContent = this.dataset.summary;
            imageElement.src = this.dataset.image;
            linkElement.href = this.dataset.link;

            featuresElement.innerHTML = "";
            JSON.parse(this.dataset.features).forEach(f => {
                const li = document.createElement("li");
                li.textContent = f;
                featuresElement.appendChild(li);
            });
        });
    });
});