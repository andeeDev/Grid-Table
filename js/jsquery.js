$(document).ready(function() {
    $('.table').scroll(function(e) {
        //detect a scroll event on the tbody
        console.log(e);
        /*$('thead').css("left", -$("tbody").scrollLeft());
        //fix the thead relative to the body scrolling
        $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft());

        //fix the first cell of the header
        $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft());*/
        //fix the first column of tdbody
    });
});
