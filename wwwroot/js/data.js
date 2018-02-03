$(document).ready(function() {
    function onAdd() {
        var n1,n2, $n1,$n2, $label, $div;
        n1 = $('.js-n1').val();
       
        $n1 = $('#n1');
       
        $div = $('#resposta');
        $div.empty();
        $n1.removeClass('has-error');
        
        if(n1 == 0){
            if(n1==0)
               $n1.addClass('has-error');
            
            return;
        }
        var res =  $.ajax({
            url: 'http://localhost:5000/api/datas?vencimento='+n1,
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
            $label.append(dados);
            
        });
        res.fail(function() {
            alert('Erro!!Verifique sua conexão!!!');
        });

    }
    function onAdd2() {
        var n2,$n2, $label, $div;
        n2 = $('.js-n2').val();
       
        $n2 = $('#n2');
       
        $div = $('#resposta2');
        $div.empty();
        $n2.removeClass('has-error');
        
        if(n2 == 0){
            if(n2==0)
               $n2.addClass('has-error');
            
            return;
        }
        var res =  $.ajax({
            url: 'http://localhost:5000/api/datas',
            type: 'post', 
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(n2),
            xhrFields: {
                withCredentials: true
            }
        });
        
        res.done(function(dados) {
            console.log(dados);
            $div = $('#resposta2');
            $div.addClass('res')
            $label = $('<label>').appendTo($div);
            $label.append(dados);
            
        });
        res.fail(function() {
            alert('Erro!!Verifique sua conexão!!!');
        });

    }

    $('.js-add').click(onAdd); 
    $('.js-add2').click(onAdd2); 
});