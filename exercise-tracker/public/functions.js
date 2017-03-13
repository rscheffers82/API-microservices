const dateOptions = {
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  format: 'd mmm, yyyy',
  formatSubmit: 'yyyy-mm-dd',
  hiddenName: true
};

$('.add-datepicker').pickadate(dateOptions);
$('.from-datepicker').pickadate(dateOptions);
$('.to-datepicker').pickadate(dateOptions);

$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true // Choose whether you can drag to open on touch screens
});

$('#menu-add-user').click(function(){
  $('input[name="username"]').focus();
});

$('#menu-add-exercise').click(function(){
  $('input[name="userId"]').focus();
});

$('#menu-search-logs').click(function(){
  $('input[name="userIdLogs"]').focus();
});

var createLogStructure = function() {
  $('#results ul.collection').html(
  '<li class="collection-header"><h3><div class="mdi mdi-book-open-variant"></div>LOGS</h3></li>' +
  '<li id="user-info" class="collection-item"></li>' +
  '<li id="table-header" class="collection-item flex">' +
    '<div class="item"><span class="mdi mdi-calendar-text"></span>Date</div>' +
    '<div class="item"><span class="mdi mdi-pencil"></span>Description</div>' +
    '<div class="item"><span class="mdi mdi-alarm"></span>Duration</div>' +
  '</li>');
};

$('#showLogs').on('click', function(e) {
  e.preventDefault();
  createLogStructure();

  setTimeout(function(){
    $('html, body').animate({
      scrollTop: $('#results').offset().top
    }, 2000);
  }, 500);

  let url = window.location.protocol + '//' + window.location.host + '/exercise/log?';
  let params =
    'userIdLogs=' + $('.userIdLogs').val() +
    '&fromDate=' + $('.from-datepicker').val() +
    '&toDate=' + $('.to-datepicker').val();

  $.getJSON( url + encodeURI(params), function() {})
    .done(function(data) {
      let { total, search, exercises } = data;
      let { name, userId, fromDate, toDate } = search;
      let html = '';

      if (!fromDate) fromDate = 'first date';
      if (!toDate) toDate = 'last date';

      html = '<div class="chip">' +
       '<span class="mdi mdi-account-card-details"></span>' +
       name + ' - ID: ' + userId +
     '</div>' +
      '<div class="chip">' +
        '<span class="mdi mdi-counter"></span>' +
        'Total exercises: ' + total +
      '</div>' +
      '<div class="chip">' +
        '<span class="mdi mdi-calendar-text"></span>' +
        'Date range: ' + fromDate + ' to ' + toDate;
      '</div>';

      $('#user-info').html('');
      $('#user-info').html(html);

      exercises.forEach(function(exercise){
        let html = '<li class="collection-item flex">' +
        '<div class="item">' + exercise.date + '</div>' +
        '<div class="item">' + exercise.description + '</div>' +
        '<div class="item">' + exercise.duration + '</div>' +
        '</li>';
        $('#results ul.collection').append(html);
      });
    })
    .fail(function(error) {
      const errorMessage = error.responseJSON.error;
      $('#user-info').html('');
      $('#user-info').html(
        '<div class="error"><strong>ERROR:</strong> ' + errorMessage + '</div>');
      console.log(errorMessage);
    });

  // jqxhr.complete(function() {
  //   console.log('request complete');
  // });

});
//NeFQ
