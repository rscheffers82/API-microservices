const dateOptions = {
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  selectYears: true,
  selectMonths: true,
  format: 'd mmm, yyyy',
  formatSubmit: 'dd-mm-yyyy',
};

$('.add-datepicker').pickadate(dateOptions);
$('.from-datepicker').pickadate(dateOptions);
$('.to-datepicker').pickadate(dateOptions);

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  }
);

  // // Show sideNav
  // $('.button-collapse').sideNav('show');
  // // Hide sideNav
  // $('.button-collapse').sideNav('hide');
