const inputFile = document.querySelector("#picture_input")
const pictureImage = document.querySelector(".picture_img")
const pitctureImageTxt = 'Escolha a capa do livro'
pictureImage.innerHTML = pitctureImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file) {
        const reader = new FileReader()

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target

            const img = document.createElement("img")
            img.src = readerTarget.result
            img.classList.add('img')

            pictureImage.innerHTML = ''
            pictureImage.appendChild(img)
        })

        reader.readAsDataURL(file)
    }
    else{
        pictureImage.innerHTML = pitctureImageTxt
    }
})
