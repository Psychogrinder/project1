var createCards = function(obj){
  var container = document.getElementsByClassName("container")[0];
  var results = obj.results;
  for (var i = 0; i < results.length; i++) {
    var card = document.createElement("div");
    container.appendChild(card);
    card.className = "card";

    var avaContainer = document.createElement("div");
    card.appendChild(avaContainer);

    var ava = document.createElement("img");
    ava.src = results[i].picture.thumbnail;
    avaContainer.appendChild(ava);

    var infoContainer = document.createElement("div");
    infoContainer.className = "info-container";
    card.appendChild(infoContainer);

    var nameContainer = document.createElement("div");
    nameContainer.className = "name-container";
    infoContainer.appendChild(nameContainer);

    var emailContainer = document.createElement("div");
    emailContainer.className = "name";
    infoContainer.appendChild(emailContainer);

    nameContainer.innerHTML = results[i].name.title + ". " + results[i].name.first + " " + results[i].name.last;
    emailContainer.innerHTML = results[i].email;
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
