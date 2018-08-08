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

    var ageContainer = document.createElement("div");
    ageContainer.className = "age-container";
    infoContainer.appendChild(ageContainer);

    var emailContainer = document.createElement("div");
    emailContainer.className = "email";
    infoContainer.appendChild(emailContainer);

    nameContainer.innerHTML = results[i].name.title + ". " + results[i].name.first + " " + results[i].name.last;
    ageContainer.innerHTML = results[i].dob.age;
    emailContainer.innerHTML = results[i].email;
  }
};

var ageFilter = function(isOlder){
  var allCards = document.querySelectorAll(".card");
  for (var i = 0; i < allCards.length; i++) {
    var card = allCards[i];
    card.classList.remove("hidden");
    var ageContainer = card.querySelector(".age-container");
    var age = parseInt(ageContainer.innerHTML);
    if (isOlder) {
      if (age <= 40) {
        card.classList.add("hidden");
      }
    } else {
      if (age > 40) {
        card.classList.add("hidden");
      }
    }
  }
};

var showAll = function () {
  var allCards = document.querySelectorAll(".card");
  for (var i = 0; i < allCards.length; i++) {
    var card = allCards[i];
    card.classList.remove("hidden");
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
    }
  });
});
