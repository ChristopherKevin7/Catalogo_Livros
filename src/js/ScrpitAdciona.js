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

const caminhoParaCatalogo = '../../Catalogo.json';

function criarObjetoJSON() {
    const TituloInput = document.getElementById('Titulo');
    const DescricaoTextarea = document.getElementById('Descricao');
    const novoLivro = {
        Nome: TituloInput.value,
        descricao: DescricaoTextarea.value,
        Imagem: pictureImage.querySelector('img') ? pictureImage.querySelector('img').src : null
    };

    // Obtém o catálogo atual do localStorage ou cria um novo array se não existir
    const catalogoAtual = JSON.parse(localStorage.getItem(caminhoParaCatalogo)) || [];

    // Adiciona o novo livro ao catálogo
    catalogoAtual.push(novoLivro);

    // Salva o catálogo atualizado de volta no localStorage
    localStorage.setItem(caminhoParaCatalogo, JSON.stringify(catalogoAtual));

    console.log('Objeto adicionado com sucesso!', novoLivro);
    console.log(novoLivro);
    console.log(catalogoAtual)

}

document.getElementById('Submit').addEventListener('click', criarObjetoJSON);