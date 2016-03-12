$ ->
  $('.item').hover ->
    console.log 'hovered'
    $(@).find('.info').removeClass('hidden')
