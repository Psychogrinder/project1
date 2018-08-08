var createCards = function(obj){
  var cardInfo = document.getElementsByClassName("container")[0];
  var results = obj.results;
  for (var i = 0; i < results.length; i++) {
    var card = document.createElement("div");
    card.innerHTML = results[i].name;
    cardInfo.appendChild(card);
    var span = document.createElement("span");
    span.innerHTML = results[i].name;
    cardInfo.appendChild(span);
  }
};

$( document ).ready(function() {
  var jsonData;

  $.ajax({
    url: 'https://randomuser.me/api/?results=100',
    dataType: 'json',
    success: function(data) {
      jsonData = data;
      createCards(jsonData);
      console.log(jsonData);
    }
  });



});
