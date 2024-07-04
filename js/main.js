$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#Telefone').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            alert("Seu pedido está sendo preparado. Ele chegará em breve!");
            form.reset();
        },
        invalidHandler: function(form, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.list button').click(function() {
        const destino = $('#Mensagem');
        const nomeVeiculo = $(this).parent().find('.hbg-name').text();

        $('#Mensagem').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})