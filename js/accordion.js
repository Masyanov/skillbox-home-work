$( function() {
  $( "#accordion" ).accordion( {
    collapsible: true
  } );
} );

$(document).ready(function() {

  $(".faq__item").click(function() {
if($(this).next("div").is(":visible")){
$(this).next("div").slideUp("slow");
} else {
$(".faq__content").slideUp("slow");
$(this).next("div").slideToggle("slow");
}



});

$( "span" ).click(function() {
  $( this ).toggleClass( "plus-active" );
});
});

