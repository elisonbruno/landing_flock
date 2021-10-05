$('document').ready(function(){
  // Carousel Depoimentos
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 12000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    loop:true,
    nav:false,
    dots: true,
    items: 1,
    mouseDrag: false
  })
});