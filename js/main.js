
$(document).ready(function(){
    // Product Carousel
    $('#product-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});