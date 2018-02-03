$(document).ready(function() {
    function onAdd() {
        var n1,n2, $n1,$n2, $label, $div;
        n1 = $('.js-n1').val();
        n2 = $('.js-n2').val();
        $n1 = $('#n1');
        $n2 = $('#n2');
        $div = $('#resposta');
        $div.empty();
        $n1.removeClass('has-error');
        $n2.removeClass('has-error');
        if(n2 == 0 || n1 == 0){
            if(n1==0)
               $n1.addClass('has-error');
            if(n2==0)
               $n2.addClass('has-error');
            return;
        }
        var res =  $.ajax({
            url: 'http://localhost:5000/api/veiculos?tempo='+n1+'&velocidade='+n2,
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
            $label.append(dados.litros+' litros e '+ dados.distancia+' km de distancia');
            
        });
        res.fail(function() {
            alert('Erro!!Verifique sua conexão!!!');
        });

    }

    $('.js-add').click(onAdd); 
});