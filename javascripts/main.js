$(function() {
  return $('.item').hover(function() {
    console.log('hovered');
    return $(this).find('.info').toggleClass('hidden');
  });
});
