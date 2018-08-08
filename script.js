var createCards = function(obj){
  var container = document.getElementsByClassName("container")[0];
  var results = obj.results;
  for (var i = 0; i < results.length; i++) {
    var card = document.createElement("div");
    card.innerHTML = results[i].name.first + " " + results[i].name.last;
    card.className = "card";
    container.appendChild(card);
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
      console.log(jsonData.results);
    }
  });



});
