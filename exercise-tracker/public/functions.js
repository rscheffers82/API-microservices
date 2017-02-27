
$( function() {
  $( '#datepicker' ).datepicker({ dateFormat: 'mm-dd-yy' });
  $( '#datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#datepicker' ).datepicker();
})();

// $('.today').on('click', function(e) {
//   e.preventDefault();
//   $( "#datepicker" ).datepicker( "setDate", "10-12-2012" );
// });
