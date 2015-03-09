
function getCatalog(response) {

    // check for blank response
    if (!response) return;

    var arr = JSON.parse(response);

    //sort by language property
    arr.sort(function(a,b){
        return a.language.toLowerCase().localeCompare(b.language.toLowerCase());
    });

    var items = [];

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        items.push(buildListItem(item.string, item.language, item.status));
    }

    document.getElementById("id01").innerHTML = '<div><ul>\n' + items.join('\n') + '</ul></div>\n';
}

function buildListItem(langName, langCode, status) {

    var style = "list-style-image: url('https://api.unfoldingword.org/obs/jpg/1/checkinglevels/uW-Level" + status.checking_level + "-16px.png');";
    var lowRes = 'https://unfoldingword.org/' + langCode + '/360px/01/';
    var highRes = 'https://unfoldingword.org/' + langCode + '/2160px/01/';
    var pdfUrl = 'https://api.unfoldingword.org/obs/txt/1/' + langCode + '/obs-' + langCode + '-v' + status.version.replace(/[ .]/g, '_') + '.pdf';

    // li text
    var html = langName + ' (' + langCode + ')';

    // low res link
    html += '<a class="img_swap" href="' + lowRes + '"><img class="languages" src="/img/low_res_h.png"></a>';

    // high res link
    html += '<a class="img_swap" href="' + highRes + '"><img class="languages" src="/img/high_res_h.png"></a>';

    // pdf link
    html += '<a class="img_swap" href="' + pdfUrl + '"><img class="languages" src="/img/download_h.png"></a>';

    return '<li class="languages" style="' + style + '">' + html + '</li>';
}

//TODO: update the code that calls to check for return codes
/*
 request.onreadystatechange = function () {
     if (request.readyState == 4 && request.status == 200) {
         callback(request.responseText);
     }
 };
 */
