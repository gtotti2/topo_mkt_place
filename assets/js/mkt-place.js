var $ = jQuery;

$(document).ready(function (e) {
    var headerMenu = $('.topo__mkt-place');


    // Coloca os dados do html dentro de uma variÃ¡vel
    var data = headerMenu.data()
    const conditionsHasMenu = data.hasOwnProperty('links') && data.links != '' && data.links != ' '

    data.background.split('#').length == 2 || data.background.length == 0  ? headerMenu.css('background-color', data.background ? data.background : '#ccc') : headerMenu.css('background', `url('${data.background}') center top / cover no-repeat scroll`);
    
    // Adiciona a classe do tema
    headerMenu.addClass(data.tema)

    // FunÃ§Ã£o para adicionar os links no menu
    function menuLinks(links) {
        let content = '';
        typeof (links) == 'object' ? links.forEach(link => {
            content += `<li><a style="color:${data.textColorMenu};" href="${link.href}">${link.nome}</a></li>`;
        }) : content += `${links}`
        return content
    }
    // FunÃ§Ã£o para verificar se existe links para serem adicionados na estrutura
    function hasLinks(data) {
        return conditionsHasMenu ? `<div class="container-fluid menu" style="background-color:${data.backgroundMenu ? data.backgroundMenu : '#ddd'};">
            <div class="row">
                <div class="container">
                    <div class="offset-md-2 offset-lg-3">
                        <div class="menu__content">
                            <ul>
                            ${menuLinks(headerMenu.data('links'))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>` : ``
    }

    var estrutura = $(`
    <div class="container">
        <div class="row justify-content-end">
            <div class="saraiva_mkt-place">
                <img src="https://images.livrariasaraiva.com.br/estatico/biblioteca/topo_mktplace/img/saraiva-marketplace.png" alt="">
            </div>
        </div>
    </div>
    <div class="container ${conditionsHasMenu ? 'hasMenu' : 'noMenu'}">
        <div class="row justify-content-start box__empresa">
            <div class="col-12 col-sm-12 col-lg-3 align-self-center align-items-center">
                <div class="empresa__img d-flex p-2 shadow-sm mx-auto" style="background-color:${data.backgroundMenu ? data.backgroundMenu : '#ddd'};">
                    <img class="align-self-center img-fluid mx-auto" src="${data.empresaImg}" alt="${data.nomeEmpresa}">
                </div>
            </div>
            <div class="col-12 col-sm-12 col-lg-9 align-self-center">
                <div class="empresa_text">
                    <h1>${data.nomeEmpresa}</h1>
                    <p>${data.textoEmpresa}
                    </p>
                </div>
            </div>
        </div>
    </div>
    ${hasLinks(headerMenu.data())}
    `)
    // Adiciona a estrutura no topo do mkt place
    headerMenu.append(estrutura)
    
    // $('.menu__content div > a').hover(
    //     function () {
    //         $(this).css("color", data.textColorMenu);
    //     }, function () {
    //         $(this).css("color", data.textColorMenu);
    //     })

})