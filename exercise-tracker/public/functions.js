
$( function() {
  $( '#add-datepicker' ).datepicker({ dateFormat: 'mm-dd-yy' });
  $( '#add-datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#add-datepicker' ).datepicker();

  $( '#from-datepicker' ).datepicker({ dateFormat: 'mm-dd-yy' });
  $( '#from-datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#from-datepicker' ).datepicker();

  $( '#to-datepicker' ).datepicker({ dateFormat: 'mm-dd-yy' });
  $( '#to-datepicker' ).datepicker( 'option', 'showAnim', 'slideDown' );
  $( '#to-datepicker' ).datepicker();
})();

// $('.today').on('click', function(e) {
//   e.preventDefault();
//   $( "#datepicker" ).datepicker( "setDate", "10-12-2012" );
// });
