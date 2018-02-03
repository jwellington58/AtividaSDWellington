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
        if(n2 == 0 || n1 == 0 ){
            if(n1==0)
               $n1.addClass('has-error');
            if(n2==0)
               $n2.addClass('has-error');
            return;
        }
        var res =  $.ajax({
            url: 'http://localhost:5000/api/valores?num1='+n1+'&num2='+n2,
            type: 'get',
            xhrFields: {
                withCredentials: true
            },
            error: function(error){
                $div = $('#resposta');
                $div.addClass('res')
                $label = $('<label>').appendTo($div);
                $label.append("erro "+ error.status+ ": "+error.responseText);
               console.log(error);
            }
        });
        
        res.done(function(dados) {
            console.log(dados);
            $div = $('#resposta');
            $div.addClass('res')
            $label = $('<label>').appendTo($div);
            $label.append(dados);
            
        });
       

    }

    $('.js-add').click(onAdd); 
});