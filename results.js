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
        resultsContainerEl.textContent = 'This query has no results. Please search again.';
        return;
    }
    for (var i = 0; i < results.length; i++) {
        // Need to add title, date(year), subjects, description, and link to 'read more'
        var titleEl = document.createAttribute('h2');
        titleEl.textContent = results[i].title;
        
        var dateEl = document.createAttribute('span');
        dateEl.textContent = results[i].date;
        titleEl.appendChild(dateEl);

        var subjectEl = document.createAttribute('span');
        subjectEl.textContent = results[i].subject;
        titleEl.appendChild(subjectEl);

        var descriptionEl = document.createAttribute('span');
        descriptionEl.textContent = results[i].description;
        titleEl.appendChild(descriptionEl);

        var linkEl = document.createAttribute('a');
        linkEl.setAttribute('href', results[i].url);
        linkEl.textContent('Read More');
        titleEl.appendChild(linkEl);

        resultsContainerEl.appendChild(titleEl);
    }
};

// TODO: create 'No Results' function


getSearchQuery();