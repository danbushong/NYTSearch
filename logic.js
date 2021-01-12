function renderArticles(response) {

}

function getSearchParameters() {

}

function validateInput(searchParameters) {

}

function clearSearchParameters() {
  
}

$(document).ready(function() {
  $("#search-btn").on("click", function(event) {
    event.preventDefault();

    var searchParameters = getSearchParameters();

    if (!validateInput(searchParameters)) 
      return;

    const API_KEY = "k82A50CismIhAy2OT09WqCskA56GPHry";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchParameters.term + "&fq=" + searchParameters.filters + "&api-key=" + API_KEY;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
  
        renderArticles(response);
  
      });
  });

  $("clear-btn").on('click', function(event) {
    event.preventDefault();
    clearSearchParameters();
  });
});
