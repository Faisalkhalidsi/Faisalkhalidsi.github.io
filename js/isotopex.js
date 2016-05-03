// init Isotope
var $grid = $('.workzxliz').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
});
// filter items on button click
$('.workzx').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});