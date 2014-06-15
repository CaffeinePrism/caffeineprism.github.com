// http://css-tricks.com/persistent-headers/
function UpdateTableHeaders() {
   $(".wrapper").each(function() {

       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           floatingHeader = $(".floatingHeader", this)

       if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
           floatingHeader.css({
            "visibility": "visible"
           });
       } else {
           floatingHeader.css({
            "visibility": "hidden"
           });
       };
   });
}

// DOM Ready
$(function() {
   var clonedHeaderRow;

   $(".wrapper").each(function() {
       clonedHeaderRow = $(".header", this);
       clonedHeaderRow
         .before(clonedHeaderRow.clone())
         .css("width", clonedHeaderRow.width())
         .addClass("floatingHeader");

   });

   //$(window).scroll(UpdateTableHeaders).trigger("scroll");

});
