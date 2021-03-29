var queryNameEl = document.querySelector('#query-name');

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

}

// TODO: create 'No Results' function


getSearchQuery();