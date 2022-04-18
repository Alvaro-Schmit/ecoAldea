const images = document.querySelectorAll('.img')
const containerimage = document.querySelector('.container-img')
const imageContainer = document.querySelector('.img-show');


images.forEach(image=>{

    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'), image.getAttribute('alt'));
       console.log(image.getAttribute('src'));
    })
})

const addImage = (srcImage, altImage)=>{
    containerimage.classList.toggle('move')
    imageContainer.src = srcImage;
    imageContainer.altc = altImage;

};

containerimage.addEventListener('click', ()=>{
    containerimage.classList.toggle('move');
})