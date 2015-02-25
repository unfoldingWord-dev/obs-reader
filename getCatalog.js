function getCatalog(response) {
    var arr = JSON.parse(response);

    //sort by language property
    arr.sort(function(a,b){
        return a.language.toLowerCase().localeCompare(b.language.toLowerCase());
    });

    var i;
    var htmlOut = "<div><ul>";
    //var strLevelsUrl = "https://api.unfoldingword.org/obs/jpg/1/checkinglevels/uW-Level1-16px.png";
    var strLevelsUrl = "https://api.unfoldingword.org/obs/jpg/1/checkinglevels/uW-Level";
    var strLowResUrl = "https://unfoldingword.org/en/360px/01/";
    var strHighResUrl ="https://unfoldingword.org/en/2160px/01/";
    var strLowResIconUrl ="/img/low_res.png";
    //var strPDFUrl = "https://api.unfoldingword.org/obs/txt/1/en/obs-en-v3_1_1.pdf";
    //https://api.unfoldingword.org/obs/txt/1/es/obs-es-v3_2_1.pdf
    var strPDFUrl = "https://api.unfoldingword.org/obs/txt/1/";

    for(i = 0; i < arr.length; i++) {
        //first create the URL for the Levels Icon
        htmlOut  += "<li class='languages' style=\"list-style-image: url('" +
            strLevelsUrl + arr[i].status.checking_level + "-16px.png";

        // next, build the URL for the low res version, then the high res, finally the pdf */
        htmlOut += "');\"> " + arr[i].string + " (" + arr[i].language + ") " + "<a class='img_swap' href=\"" + strLowResUrl.replace("/en/", "/" + arr[i].language + "/") + "\"><img class='languages' src='/img/low_res_h.png' /></a> " +
        "<a class='img_swap' href=\"" + strHighResUrl.replace("/en/", "/" + arr[i].language + "/") + "\"><img class='languages' src='/img/high_res_h.png'></a> " +
        "<a class='img_swap' href=\""  + strPDFUrl + arr[i].language + "/obs-" + arr[i].language + "-v" + arr[i].status.version.replace(/[ .]/g, "_") + ".pdf" + "\"><img class='languages' src='/img/download_h.png'></a>";
    }
    // close out the list and the div
    htmlOut += "</ul></div>";

    document.getElementById("id01").innerHTML = htmlOut;
    //document.write(arr.length);
}
