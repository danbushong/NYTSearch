function renderArticles(response) {
  var articleHeadline = response.docs.headline.main;
  var articleURL = response.docs.web_url;

  console.log(articleURL);

  for (i = 0;  i > $("option").val(i); i++)
  $("#results").append("<h1>",articleHeadline + "<a>",articleURL);



  var recordsNumber= $("#number-records-select").value();
}

function getSearchParameters() {
  var term = $("#search-term-input").value();
  var term = $("#search-term-input").value();
  var startYear= $("#start-year-input").value();
  var endYear = $("end-year-input").value();

  
  var searchParameters = {"term": term,"startYear":startYear,"endYear":endYear}
  return searchParameters; 



}

function clearSearchParameters() {
  $("#search-term-input").val("");
  $("#start-year-input").val("");
  $("end-year-input").val("");

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