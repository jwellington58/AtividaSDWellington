$(document).ready(function() {
    function onAdd() {
        var n1, $n1, $label, $div;
        n1 = $('.js-n1').val();
        
        $n1 = $('#n1');
        $div = $('#resposta');
        $div.empty();
        $n1.removeClass('has-error');
        
        if(n1==0){
            if(n1==0)
               $n1.addClass('has-error');
            return;
        }
        var res =  $.ajax({
            url: 'http://localhost:5000/api/moedas?nota='+n1,
            type: 'get',
            xhrFields: {
                withCredentials: true
            }
        });
        
        res.done(function(dados) {
            console.log(dados);
            $div = $('#resposta');
            $div.addClass('res')
            $label = $('<label>').appendTo($div);
            $label.append(dados.moedas10 + ' moedas de 10, '+ dados.moedas25+' moedas de 25 e '+ dados.moedas50 + ' moedas de 50');
            
        });
        res.fail(function() {
            alert('Erro!!Verifique sua conexão!!!');
        });

    }

    $('.js-add').click(onAdd); 
});