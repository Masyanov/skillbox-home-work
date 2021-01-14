$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );

$( function() {
  $( "#accordion" ).on( "click", function() {
    $( ".plus" ).toggleClass( "plus-active", 1000 );
  });
} );
