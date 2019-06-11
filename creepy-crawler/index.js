;(function() {
    "use strict";
    
    console.log('index.js ...');

})();


function cc(url, searchText) {
    const Creepy = require('./creepy');
    const creepy = new Creepy();
    creepy.crawl();
}
