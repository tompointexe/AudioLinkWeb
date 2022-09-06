$(function()
{
$('.slider').on('input change', function(){
          $(this).next($('.slider_label')).html(this.value);
        });
      $('.slider_label').each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });   
})

document.getElementById('reset').onclick = function(){
    document.getElementById('range_gain').value = 100;
    document.getElementById('range_eqtreble').value = 100;
    document.getElementById('range_eqbass').value = 100;
    
 };