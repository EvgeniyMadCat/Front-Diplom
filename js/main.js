$(window).on('load',function(){
    
    $("#slider_container").owlCarousel({
      loop:true,
      nav:true,
      navSpeed: 700,
      navText: [$('.fas.fa-angle-left'),$('.fas.fa-angle-right')],    
      autoplay:true,
      autoplaySpeed: 1000,  
      items:1        
    });

  $("#slider_container2").owlCarousel({
    loop:true,           
    autoplay:true,
    autoplaySpeed: 1000,    
    items:1      
  });

  var owl = $("#slider_container"); 
  owl.trigger('refresh.owl.carousel');
});

