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
