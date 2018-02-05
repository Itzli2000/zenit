$(function() {
  $(".rslides").responsiveSlides({
    auto: true,             
    speed: 300,            
    timeout: 4000,          
    pager: false,           
    nav: true,           
    pauseControls: true,    
    prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',   
    nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',       
    manualControls: "",     
    namespace: "rslides",    
  });
});