$(document).ready(function(){
$('.BarsLinks').toggle(function(){
 $('#Barsbox').hide();
 },function(){
 $('#Barsbox').show();
});
setTimeout(function(){
 $('#Barsbox').hide();
}, 1000);

$('img').click(function(){
    console.log('img');
});

});