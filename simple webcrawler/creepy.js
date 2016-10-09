var cla = require('command-line-args');
var optDefs = [{
    name: 'url',
    type: String
}, {
    name: 'search',
    type: String,
    multiple: true
}];
var options = cla(optDefs);
console.log('options::', options);

var protocol = 'http://';
var pageToVisit = protocol + options.url;
console.log('Visiting page::', pageToVisit);

var searchTag = options.search;
console.log('Search Tag::', searchTag);

var crawler = require('crawler');

var $ = crawler(pageToVisit, searchTag);