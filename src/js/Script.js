const caminhoParaCatalogo = '../../Catalogo.json'
const catalogoAtual = JSON.parse(localStorage.getItem(caminhoParaCatalogo)) || [];

function ToLoad() {
    fetch('Catalogo.json')
        .then(response => response.json())
        .then(Catalogo => {
            const container = document.querySelector("#Livros-Container")

            Catalogo.map(Livro => {
                const card = document.createElement("div")
                card.classList.add("card")
                card.setAttribute("data-nome", Livro.Nome);

                const img = document.createElement("img")
                img.classList.add("Capa")
                img.src = Livro.Imagem
                img.alt = Livro.Nome

                const Titulo = document.createElement("h3")
                Titulo.textContent = Livro.Nome


                const deleteButton = document.createElement("button")
                deleteButton.textContent = "Deletar"
                deleteButton.classList.add("Delete")
                deleteButton.addEventListener("click", () => deletarLivro(Livro, Catalogo))

                card.appendChild(img)
                card.appendChild(Titulo)
                card.appendChild(deleteButton)
                container.appendChild(card)
            })
            catalogoAtual.map(Livro => {
                const card = document.createElement("div")
                card.classList.add("card")
                card.setAttribute("data-nome", Livro.Nome);

                const img = document.createElement("img")
                img.classList.add("Capa")
                img.src = Livro.Imagem
                img.alt = Livro.Nome

                const Titulo = document.createElement("h3")
                Titulo.textContent = Livro.Nome

                const deleteButton = document.createElement("button")
                deleteButton.textContent = "Deletar"
                deleteButton.classList.add("Delete")
                deleteButton.addEventListener("click", () => deletarLivro(Livro, Catalogo))

                card.appendChild(img)
                card.appendChild(Titulo)
                card.appendChild(deleteButton)
                container.appendChild(card)
            })
        })
}

ToLoad()

function deletarLivro(livro ,Catalogo) {
    // Remove o livro do catálogo atual
    const indexNoCatalogo = catalogoAtual.findIndex(l => l.Nome === livro.Nome);
    if (indexNoCatalogo !== -1) {
        catalogoAtual.splice(indexNoCatalogo, 1);
    }

    // Remove o livro do catálogo original
    const indexNoCatalogoOriginal = Catalogo.findIndex(l => l.Nome === livro.Nome);
    if (indexNoCatalogoOriginal !== -1) {
        Catalogo.splice(indexNoCatalogoOriginal, 1);
    }

    // Atualiza o localStorage
    localStorage.setItem(caminhoParaCatalogo, JSON.stringify(catalogoAtual));

    // Atualiza a exibição removendo o elemento do DOM
    const container = document.querySelector("#Livros-Container");
    const cardToDelete = container.querySelector(`[data-nome="${livro.Nome}"]`);
    if (cardToDelete) {
        container.removeChild(cardToDelete);
    }
}
