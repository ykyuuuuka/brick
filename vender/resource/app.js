$('.code').exCodePrettify({
    showDemo:true,
    behaveJS : true
});

$(function() {
    $( "#sortable" ).sortable({
        revert: true
    });
    $( "div" ).disableSelection();
});