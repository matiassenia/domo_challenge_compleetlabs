
/*Se agrega o elimina clases con movimientos al scrollear */
const images = document.querySelectorAll('.log-animation');

function triggerAnimation(entries){
    entries.forEach(entry => {
        const image = entry.target.querySelector('svg');
        const imagen = entry.target.querySelector('.element')
        console.log(image);
        image && image.classList.toggle('unset', entry.isIntersecting);
        imagen && imagen.classList.toggle('unset', entry.isIntersecting);
    })
}

const options= {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, 
}
const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image => {
    observer.observe(image)
});



