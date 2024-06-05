// A JavaScript script that updates the text color of <header> element to red (#FF0000) when the user clicks on the DIV#red_header.

$('#red_header').click(function () {
    $('header').css('color', '#FF0000');
});