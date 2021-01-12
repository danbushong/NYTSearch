

    
$("#search-button").on("click", function() {

 

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+ apiKey;
    var apiKey = "k82A50CismIhAy2OT09WqCskA56GPHry";

      
    $.ajax({
    url: queryURL,
    method: "GET"
});

