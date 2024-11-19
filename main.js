$(document).ready(function(){
    $('#btn-tarefa').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    
        const addTarefa = $('#addInput').val();
        const novoItem = $('#addLista');

        $(`<li>${addTarefa}</li>`).appendTo(novoItem);

        $(novoItem).fadeIn('slow');
        $('#addInput').val('');
    });

    $('#addLista').on('click', 'li', function(e) {
        $(e.target).toggleClass('finalizado');
    });

    $('#btn-delete-tarefa').click(function() {
        $('#addLista').empty();
    })

});