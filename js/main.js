// Fazendo o codigo em JS pra abrir e fechar o botao do menu, na versao mobile.
// let botao = document.querySelector('.menu-principal__btn');
// let menuPrincipal = document.querySelector('.menu-principal');

// botao.addEventListener("click", abreFechaMenu);

// function abreFechaMenu(evento){
//     menuPrincipal.classList.toggle('menu-principal--fechado');
// }

// JQuery
// Fazendo o mesmo codigo acima para abrir e fechar o botao do menu na versao mobile, porem com o JQuery.
$(document).ready(function(){
    $('.menu-principal__btn').click(function(){
        $('.menu-principal').toggleClass('menu-principal--fechado');
    });


    // Slide depoimentos
    $('.depoimentos__caixa').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    // Validação do formulário de contato
    $('.formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            mensagem: 'required',
        },
        messages: {
            nome: 'Por favor preencha o campo Nome',
            email: {
                required: 'Por favor preencha o e-mail.',
                email: 'Por favor preencha um e-mail válido'
            },
            mensagem: 'Por favor preencha o campo Mensagem'
        }
    });
});



