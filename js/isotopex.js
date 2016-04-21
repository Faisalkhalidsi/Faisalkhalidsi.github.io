// init Isotope
var $grid = $('.workzxliz').isotope({
  // options
});
// filter items on button click
$('.workzx').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});