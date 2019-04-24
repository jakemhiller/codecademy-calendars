(function () {
    var oldUrlBase = '//codecademy.github.io'
    var newUrlBase = '//ryzacinc.github.io';
    var newUrl = window.location.toString().replace(oldUrlBase, newUrlBase);

    console.log("Redirecting to: " + newUrl);
    window.location = newUrl;
})();
