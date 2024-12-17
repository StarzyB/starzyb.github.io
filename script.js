/*about*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.aboutbuttonnav').addEventListener('click', () => {
        const aboutElement = document.querySelector('.about');
        const frontpageElement = document.querySelector('.frontpage');
        if (aboutElement.classList.contains('visible')) {
            console.log('About is visible');
        } else {
            aboutElement.classList.toggle('visible');
            frontpageElement.classList.toggle('hidden');
        }
        aboutElement.style.transition = 'opacity 0.5s';
        frontpageElement.style.transition = 'opacity 0.5s';
    }
    );
}
);

/*home*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.homebuttonnav').addEventListener('click', () => {
        const aboutElement = document.querySelector('.about');
        const frontpageElement = document.querySelector('.frontpage');
        if (frontpageElement.classList.contains('hidden')) {
            aboutElement.classList.toggle('visible');
            frontpageElement.classList.toggle('hidden');
        } else {
            console.log('Home is visible');
        }
        aboutElement.style.transition = 'opacity 0.5s';
        frontpageElement.style.transition = 'opacity 0.5s';
    }
    );
}
);