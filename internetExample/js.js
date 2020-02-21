$(document).ready(function() {
    $('tbody').scroll(function(e) {
        //detect a scroll event on the tbody

        $('thead').css("left", -$("tbody").scrollLeft());
        //fix the thead relative to the body scrolling
        $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft());

        //fix the first cell of the header
        $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft());
        //fix the first column of tdbody
    });
});
