function postToUrl() {
    "use strict";

    var url = $('#url').val();
    console.log('url::' + url);
    var searchText = $('#searchText').val();
    console.log('searchText::' + searchText);

    cc(url, searchText);
}
