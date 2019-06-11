function crawler() {
    "use strict";

    const request = require('request');
    const cheerio = require('cheerio');
    const URL = require('url-parse');

    this.visit = function(pageToVisit) {

        request(pageToVisit, function(error, response, body) {
            return new Promise(function(resolve, reject) {
                if (!error && response.statusCode === 200) {
                    resolve(cheerio.load(body));
                } else {
//                    reject(error.message);
                }
            });
        });

    };

}

module.exports = crawler;
