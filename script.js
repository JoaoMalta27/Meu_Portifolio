const themeToggle = document.getElementById('theme-toggle')
if (localStorage.getItem('portfolio-theme') === 'light') {
    document.body.classList.add('light-mode')
    themeToggle.textContent = ' Modo Claro'
} else {
    themeToggle.textContent = ' Modo Escuro'
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode')
    
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = ' Modo Claro'
        localStorage.setItem('portfolio-theme', 'light')
    } else {
        themeToggle.textContent = ' Modo Escuro'
        localStorage.setItem('portfolio-theme', 'dark')
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href')
        if (targetId.startsWith('#')) {
            e.preventDefault()
            const targetElement = document.querySelector(targetId)
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});