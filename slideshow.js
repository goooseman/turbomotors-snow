$(document).ready(function() {


    setTimeout(slideshow(), 3000);
});

function slideshow() {
    setTimeout(function() {
        $('.first').addClass('animated zoomOut');
        $('.second').removeClass('animated zoomOut').addClass('animated zoomIn').removeClass('hidden');
        setTimeout(function() {
            $('.second').addClass('animated zoomOut');
            $('.third').removeClass('animated zoomOut').addClass('animated zoomIn').removeClass('hidden');
            setTimeout(function() {
                $('.third').addClass('animated zoomOut');
                $('.first').removeClass('animated zoomOut').addClass('animated zoomIn');
                slideshow();
            }, 5000)
        }, 3000)
    }, 2000)
}
