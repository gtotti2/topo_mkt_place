var $ = jQuery;

$(document).ready(function (e) {
    var headerMenu = $('.topo__mkt-place');


    // Coloca os dados do html dentro de uma variável
    var data = headerMenu.data()

    // Coloca o background color na section
    headerMenu.css('background-color', data.background ? data.background : '#ccc')
    // Adiciona a classe do tema
    headerMenu.addClass(data.tema)

    // Função para adicionar os links no menu
    function menuLinks(links) {
        let content = '';
        typeof (links) == 'object' ? links.forEach(link => {
            content += `<div><a style="color:${data.textColorMenu};" href="${link.href}">${link.nome}</a></div>`;
        }) : content += `${links}`
        return content
    }
    // Função para verificar se existe links para serem adicionados na estrutura
    function hasLinks(data) {
        return data.hasOwnProperty('links') && data.links != '' && data.links != ' ' ? `<div class="container-fluid menu" style="background-color:${data.backgroundMenu ? data.backgroundMenu : '#ddd'};">
            <div class="row">
                <div class="container">
                    <div class="offset-md-4 offset-lg-3">
                        <div class="menu__content align-items-stretch d-flex flex-column flex-wrap flex-sm-row">
                            ${menuLinks(headerMenu.data('links'))}
                        </div>
                    </div>
                </div>
            </div>
        </div>` : ``
    }

    var estrutura = $(`
    <div class="container-fluid">
        <div class="row justify-content-end">
            <div class="saraiva_mkt-place">
                <img src="./assets/img/logo_mktplace-saraiva@1X.png" alt="">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-start align-items-center box__empresa">
            <div class="col-12 col-sm-4 col-lg-3 align-items-center">
                <div class="empresa__img d-flex p-2 shadow-sm mx-auto">
                    <img class="align-self-center img-fluid mx-auto" src="${data.empresaImg}" alt="${data.nomeEmpresa}">
                </div>
            </div>
            <div class="col-12 col-sm-8 col-lg-9">
                <div class="empresa_text">
                    <h2>${data.nomeEmpresa}</h2>
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