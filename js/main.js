//1 часть
$(function(){
var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();

        var tabId = $(this).attr('href');

        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');

        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
});


//2часть

$(function () {

  var showTooltip = function(e) {
       $(this).next().fadeIn(200);
      };

  var hideTooltip = function (e) {
      $(this).next().hide(600);
      };

  $('input').hover(showTooltip, hideTooltip);

$('.help').on('click', function (){
  var $helpText = $('.help')[0].innerHTML;
  if ($helpText.indexOf('Show') >= 0) {
            $('.tooltip').fadeIn(200);;
            $('.help')[0].innerHTML = $helpText.replace('Show', 'Hide');
        }
        else {
            $('.tooltip').hide(600);
            $('.help')[0].innerHTML = $helpText.replace('Hide', 'Show');

}
});

});
