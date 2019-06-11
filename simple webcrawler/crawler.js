function crawler() {
    "use strict";

    const request = require('request');
    const cheerio = require('cheerio');
    const URL = require('url-parse');
    
    request(pageToVisit, function(error, response, body) {
        if (error) {
            console.log('Error::', error);
        }
    
        // Check status code (200 is HTTP OK)
        console.log('Status code::' + response.statusCode);
        var $;
        if (response.statusCode === 200) {
            // Parse the document body
            $ = cheerio.load(body);
            console.log('Page title::' + $('title').text());
        }
    
        (function($) {
            var allRelativeLinks = [];
            var allAbsoluteLinks = [];
    
            var relativeLinks = $("a[href^='/']");
            relativeLinks.each(function() {
                allRelativeLinks.push($(this).attr('href'));
            });
    
            var absoluteLinks = $("a[href^='http']");
            absoluteLinks.each(function() {
                allAbsoluteLinks.push($(this).attr('href'));
            });
    /*
            console.log("Found " + allRelativeLinks.length + " relative links");
            console.log("Found " + allAbsoluteLinks.length + " absolute links");
            console.log("allRelativeLinks::", allRelativeLinks);
            console.log("allAbsoluteLinks::", allAbsoluteLinks);
    */
        })($);
    
        (function($, searchTag) {
            var bodyText = $('html > body').text();
            var matched = [];
            searchTag.map(function(tag) {
                if (bodyText.toLowerCase().indexOf(tag.toLowerCase()) !== -1) {
                    matched.push(bodyText);
                }
            });
            matched.map(function(match) {
    //            console.log('match::', match);
            });
        })($, searchTag);
    });
    
}

module.exports = crawler;
