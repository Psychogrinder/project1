$( document ).ready(function() {
  $.ajax({
    url: 'https://randomuser.me/api/?results=100',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });








});



// var getJson = function(){
//
// };
