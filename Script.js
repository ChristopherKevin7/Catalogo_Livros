    function ToLoad() {
        fetch('Catalogo.json')
            .then(response => response.json())
            .then(Catalogo => {
                const container = document.querySelector("#Livros-Container")

                Catalogo.map(Livro => {
                    const card = document.createElement("div")
                    card.classList.add("card")

                    const img =document.createElement("img")
                    img.src = Livro.Imagem
                    img.alt = Livro.Nome

                    const Titulo = document.createElement("h3")
                    Titulo.textContent = Livro.Nome

                    card.appendChild(img)
                    card.appendChild(Titulo)
                    container.appendChild(card)
                })
            })
    }

    ToLoad()