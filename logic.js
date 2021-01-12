

    
$("#search-button").on("click", function(response) {

 

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+ apiKey;
    var apiKey = "k82A50CismIhAy2OT09WqCskA56GPHry";

      
    $.ajax({
    url: queryURL,
    method: "GET"
})
var searchInput = $("#search-term-input").val();
var recordsInput = $("#number-records-select").val();
var startYear = $("#start-year-input").val();
var endYear = $("#end-year-input").val();
});

