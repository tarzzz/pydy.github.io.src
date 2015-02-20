$(function () {

	var s = $("#top");
	
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 650) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });	
	
	$('a[rel*=leanModal]').leanModal({ top : 200, closeButton: ".modal_close" });	


	$('.pdf-options .py a').on('click', function() {
		$('.modal_close').click();
		ga('send', 'event', 'download', 'pdf', 'py-quant-econ.pdf');
	});

	$('.pdf-options .jl a').on('click', function() {
		$('.modal_close').click();
		ga('send', 'event', 'download', 'pdf', 'jl-quant-econ.pdf');
	});

});
