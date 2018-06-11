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

  $(function () {
    // инициализация datetimepicker7 и datetimepicker8
    $("#datetimepicker7").datetimepicker({format:'DD.MM.YYYY'});
    $("#datetimepicker8").datetimepicker({
        useCurrent: false,
        format:'DD.MM.YYYY'
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker8").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
    });
});


});


