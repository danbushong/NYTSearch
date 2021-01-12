const ERROR_MESSAGES = {
  "BLANK_TERM" : "Please enter a search term.",
  "BLANK_NUM_RECORD" : "Please select a number of records.",
  "TOO_LONG_TERM" : "The search term can't be longer than 32 characters.",
  "INVALID_START_YEAR" : "Please enter a valid start year.",
  "INVALID_END_YEAR" : "Please enter a valid end year."
}

function renderArticles(response) {
  var articleHeadline = response.docs.headline.main;
  var articleURL = response.docs.web_url;

  console.log(articleURL);

  for (i = 0;  i > $("option").val(i); i++)
  $("#results").append("<h1>",articleHeadline + "<a>",articleURL);
}

function getSearchParameters() {
  var term = $("#search-term-input").val();
  var numberRecords = $("#number-records-select").val();
  var startYear = $("#start-year-input").val();
  var endYear = $("#end-year-input").val();

  return {
    "term" : term,
    "numberRecords" : numberRecords,
    "startYear" : startYear,
    "endYear" :  endYear
  };
}

function validateInput(searchParameters) {
  $("#display-error-message").hide(); 

  const VALID = true;

  // If searchParameters has no term
  if (!searchParameters.term) {
    displayErrorMessage(ERROR_MESSAGES.BLANK_TERM);
    return !VALID;
  }

  // If searchParameters has no numberRecords
  if (!searchParameters.numberRecords) {
    displayErrorMessage(ERROR_MESSAGES.BLANK_NUM_RECORD);
    return !VALID;
  }

  // If term is greater than 32 characters
  if (searchParameters.term.length > 32) {
    displayErrorMessage(ERROR_MESSAGES.TOO_LONG_TERM);
    return !VALID;
  }

  // If start year isn't between 1851 and 2021
  if (!(searchParameters.startYear >= 1851 && searchParameters.startYear <= 2021)) {
    displayErrorMessage(ERROR_MESSAGES.INVALID_START_YEAR);
    return !VALID;
  }

  console.log(searchParameters.endYear);
  // If end year isn't between 1851 and 2021
  if (!(searchParameters.endYear >= 1851 && searchParameters.endYear <= 2021)) {
    displayErrorMessage(ERROR_MESSAGES.INVALID_END_YEAR);
    return !VALID;
  }
    
  return VALID;
}

function displayErrorMessage(message) {
  $("#display-error-message").text(message);
  $("#display-error-message").show();  
}

function clearResults() {

}

function clearSearchParameters() {
  $("#search-term-input").val("");
  $("#start-year-input").val("");
  $("end-year-input").val("");
}

$(document).ready(function() {
  $("#search-button").on("click", function(event) {
    event.preventDefault();

    var searchParameters = getSearchParameters();

    if (!validateInput(searchParameters)) 
      return;

    const API_KEY = "k82A50CismIhAy2OT09WqCskA56GPHry";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchParameters.term + "&api-key=" + API_KEY;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        renderArticles(response);
      });
  });

  $("clear-button").on("click", function(event) {
    event.preventDefault();
    clearResults();
  });
});
