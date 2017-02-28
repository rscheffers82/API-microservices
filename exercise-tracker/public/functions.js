// var mc = require('materialcss');


$('#main-menu').click(function() {
  $('body > .mc-navigation').removeClass('closed');
});

$('#close-main-menu').click(function() {
  $('body > .mc-navigation').addClass('closed');
});

$( function() {
  $( '#add-datepicker' ).datepicker({
    dateFormat: 'mm-dd-yy',
    onSelect: function() {
      $('#add-label').addClass('mc-label mc-completed-label');
    }
  });
  $( '#add-datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#add-datepicker' ).datepicker();

  $( '#from-datepicker' ).datepicker({
    dateFormat: 'mm-dd-yy',
    onSelect: function() {
      $('#from-label').addClass('mc-label mc-completed-label');
    }
  });
  $( '#from-datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#from-datepicker' ).datepicker();

  $( '#to-datepicker' ).datepicker({
    dateFormat: 'mm-dd-yy',
    onSelect: function() {
      $('#to-label').addClass('mc-label mc-completed-label');
    }
  });
  $( '#to-datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#to-datepicker' ).datepicker();

  // mc-label mc-completed-label
})();

// $('.today').on('click', function(e) {
//   e.preventDefault();
//   $( '#datepicker' ).datepicker( 'setDate', '10-12-2012' );
// });
