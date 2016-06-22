jQuery(function ($) {
    $('#more').mouseenter(function (evt) {
    var email = '<div class="dropdown" style="z-index: 1"><h4><a href="contact.html">E-mail</a></h4></div>';
    var blog = '<div class="dropdown" style="z-index: 1"><h4><a href="blog.html">Blog</a></h4></div>';
    evt.preventDefault();
    $(this).append('<hr class="drop-separator">', email, blog);
    $('.dropdown').toggleClass('link-generated');
  })

  $('#more').mouseleave(function (evt) {
    evt.preventDefault();
    $('.dropdown').remove();
    $('.drop-separator').remove();
    $('.notice').toggleClass('trans');
  })

  $('#more').on('click', 'a[href^="blog"]', function (evt) {
    evt.preventDefault();
    $('.navbar').last().append("<div class='notice'><h2>Coming Soon!</h2></div>");
    setTimeout(function () {
      $('.notice').remove();
    }, 1250);
  })

  $('#github').hover(function () {
    setTimeout(function () {
      $('.flash').remove();
    }, 250);
    $('.navbar').last().append("<div class='flash'><h2>~../> github/marcocode</h2></div>");
  })
})
