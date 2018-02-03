$(document).ready(function() {
    function onAdd() {
        console.log("saddfsdgf rhtr hfg");
        var n1,n2, n3,$n1,$n2, $label, $div;
        n1 = $('.js-n1').val();
        n2 = $('.js-n2').val();
        n3 = $('.js-n3').val();
        $n1 = $('#n1');
        $n2 = $('#n2');
        $n3 = $('#n3');
        $div = $('#resposta');
        $div.empty();
        $n1.removeClass('has-error');
        $n2.removeClass('has-error');
        if( n2 == 0 || n1 == 0|| n3 == 0){
            if(n1==0)
               $n1.addClass('has-error');
            if(n2==0)
               $n2.addClass('has-error');
            if(n3==0 )
               $n3.addClass('has-error');
            return;
        }
        var fumante = {
            Anos: n1,
            Cigarros: n2, 
            Carteira: n3 
        }
        var res =  $.ajax({
            url: 'http://localhost:5000/api/fumantes',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(fumante),
            xhrFields: {
                withCredentials: true
            }
        });
        
        res.done(function(dados) {
            console.log(dados);
            $div = $('#resposta');
            $div.addClass('res')
            $label = $('<label>').appendTo($div);
            $label.append(dados);
            
        });
        res.fail(function() {
            alert('Erro!!Verifique sua conexão!!!');
        });

    }

    $('.js-add').click(onAdd); 
});