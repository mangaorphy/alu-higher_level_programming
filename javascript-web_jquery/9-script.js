// JavaScript script that fetches from https://fourtonfish.com/hellosalut/?lang=fr and displays the value of hello from the fetch in the HTML tag DIV#hello.

$(document).ready(function() {
    $.ajax({
        url: 'https://fourtonfish.com/hellosalut/?lang=fr',
        type: 'GET',
        success: function(data) {
            $('#hello').text(data.hello);
        }
    });
});