jQuery(function ($) {
  $('#blog').on('click', function (evt) {
    evt.preventDefault();
    $('.text-uppercase').first().append("<div class='notice'><h2>Coming Soon</h2></div>");
    setTimeout(function () {
      $('.notice').remove();
    }, 1500);
  })
})
