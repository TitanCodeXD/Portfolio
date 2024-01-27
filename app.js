// Botão apenas para descrição de projetos
// function toggleLanguage() {
//     const isEnglish = document.documentElement.lang === 'en';

//     const descriptionsEN = document.querySelectorAll('.project-description-en');
//     const descriptionsPT = document.querySelectorAll('.project-description-pt');

//     if (isEnglish) {
//         toggleDescriptions(descriptionsPT, descriptionsEN);
//         document.documentElement.lang = 'pt';
//     } else {
//         toggleDescriptions(descriptionsEN, descriptionsPT);
//         document.documentElement.lang = 'en';
//     }
// }

// function toggleDescriptions(toShow, toHide) {
//     // Adiciona a classe 'visible' para mostrar e remove 'hidden'
//     toShow.forEach(description => {
//         description.classList.remove('hidden');
//         description.classList.add('visible');
//     });

//     // Adiciona a classe 'hidden' para ocultar e remove 'visible'
//     toHide.forEach(description => {
//         description.classList.add('hidden');
//         description.classList.remove('visible');
//     });
// }





// Função para trocar linguagem da página
function toggleLanguage() {
    const isEnglish = document.documentElement.lang === 'en';

    const contentEN = document.querySelector('.content-en');
    const contentPT = document.querySelector('.content-pt');

    if (isEnglish) {
        toggleContent(contentPT, contentEN);
        document.documentElement.lang = 'pt';
    } else {
        toggleContent(contentEN, contentPT);
        document.documentElement.lang = 'en';
    }
}

function toggleContent(toShow, toHide) {
    toShow.classList.remove('hidden');
    toHide.classList.add('hidden');
}
