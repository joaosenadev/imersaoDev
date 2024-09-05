function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""

    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${dado.redeSocial}" target="_blank">
                    ${dado.titulo}
                </a>
            </h2>
            
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
    
            <div class="item-buttons">
                <a class="item-btn outline" href="${dado.wiki}" target="_blank">Mais informações</a>
                <a class="item-btn" href="${dado.musicaPopular}" target="_blank">Música Popular</a>
            </div>
        </div>
    `
    }

    section.innerHTML = resultados
}

