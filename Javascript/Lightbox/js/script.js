

var allImages = document.querySelectorAll('.image')


allImages.forEach((element)=> {
    element.addEventListener('click', (event) =>{
        console.log(event.target.src)

        document.getElementById('imagelightbox').src = event.target.src;

        document.querySelector('.lightbox').classList.remove('d_none')
    });
})
console.log(allImages)

document.querySelector('.lightboxClose').addEventListener('click', ()=> {
    document.querySelector('.lightbox').classList.add('d_none')
})