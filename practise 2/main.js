

// let cursor = document.getElementById('cursorId')

// document.body.addEventListener("mousemove", function(e) {
//     cursor.style.left = e.clientX +'px'
//     cursor.style.top = e.clienty +'px'
// })

(function swapMainImage() {
    var imgSrc=document.getElementsByClassName('img-item')
    for (let index = 0; index < imgSrc.length; index++) {
        const img = imgSrc[index];
        img.addEventListener('mouseenter', function(e) {
            setTimeout(function() {
                document.getElementById('mainImageId').setAttribute('src', img.getAttribute('src'))
            },70)
        })
        
        img.addEventListener('click', function(e) {
            setTimeout(function() {
                
                document.getElementById('contrastImg').setAttribute('src', img.getAttribute('src'))
                console.log(document.getElementById('contrastImg'))
                document.getElementById('onImageClickId').classList.remove('d-none')
            },70)
        })
        
    }

    

    
})()
document.addEventListener('click', function(e) {
    console.log(e.target.toString())
    if (e.target.toString().includes('HTMLDivElement')) {
        document.getElementById('onImageClickId').classList.add('d-none')

    }
})