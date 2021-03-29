// TODO: Add 'query-name' as ID to URL
var queryNameEl = document.querySelector('#query-name');
// TODO: Add 'results-container' as ID to results section
var resultsContainerEl = document.querySelector('#results-container')

var getSearchQuery = function () {
    var queryString = document.location.search;
    var queryName = queryString.split('=')[1];
    if (queryName) {
        queryNameEl.textContent = queryName;

        getResults(queryName);
    } else {
        document.location.replace('./index.html');
    }
};

var getResults = function (query) {
    // TODO: make sure this URL is correct
    var apiUrl = 'https://www.loc.gov/search/?=' + query;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayResults(query);
            });
        };
    });
};

// TODO: 
var displayResults = function (results) {
    if (results.length === 0) {

    }
    for (var i = 0; i < results.length; i++) {
        // Need to add title, date(year), subjects, description, and link to 'read more'
        var titleEl = document.createAttribute('span');
        titleEl.textContent = results[i].title;        
    }
}

// TODO: create 'No Results' function


getSearchQuery();