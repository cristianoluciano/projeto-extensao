document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.querySelector('.conteudo-hero h1');
    if (!titulo) 
        return;
    
    setTimeout(() => titulo.classList.add('animar'), 120);
});


