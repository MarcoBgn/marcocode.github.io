jQuery(function ($) {
    $('#contact').mouseenter(function (evt) {
    var email = '<div class="dropdown" style="z-index: 1"><h4><a href="contact.html">E-mail</a></h4></div>';
    var blog = '<div class="dropdown" style="z-index: 1"><h4><a id="blog" href="contact.html">Blog</a></h4></div>';
    evt.preventDefault();
    $(this).append('<hr class="drop-separator">', email, blog);
    $('.dropdown').toggleClass('link-generated');
  })

  $('#contact').mouseleave(function (evt) {
    evt.preventDefault();
    $('.dropdown').remove();
    $('.drop-separator').remove();
  })

  $('#blog').click(function (evt) {
    evt.preventDefault();
    $('.text-uppercase').first().append("<div class='notice'><h2>Coming Soon!</h2></div>");
    setTimeout(function () {
      $('.notice').remove();
    }, 1500);
  })
})
