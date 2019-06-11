function creepy() {
    "use strict";

    const Crawler = require('./crawler');
    const cla = require('command-line-args');
    const optDefs = [{
        name: 'url',
        type: String
    }, {
        name: 'search',
        type: String,
        multiple: true
    }];
    const options = cla(optDefs);
    console.log('options::', options);

    const protocol = 'http://';
    const pageToVisit = protocol + options.url || 'www.cnn.com';
    console.log('Visiting page::', pageToVisit);

    const searchTag = options.search;
    console.log('Search Tag::', searchTag);

    this.crawl = function() {
//        const crawler = new Crawler();
//        var $;
//        crawler.visit(pageToVisit).then(function(result) {
//            $ = result;
//            console.log('***** creepy got $::', $);
//        }, function(error) {
//            console.error(error);
//        });
    };
}

module.exports = creepy;
