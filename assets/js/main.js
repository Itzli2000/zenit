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
  $(".infoSlides").responsiveSlides({
    auto: true,             
    speed: 300,            
    timeout: 4000,          
    pager: true,           
    nav: false,        
    pauseControls: true,       
    namespace: "centered-btns"   
  });
  $('#myWizard').easyWizard();
});

jQuery(document).ready(function($) {
  // Function to enable next button
  // if inputs are filled
  $('#formbtn').prop('disabled',true);
  $('input[type=text],input[type=password]').keyup(function() {
      if($('#evento').val()!= 0 && $('#tipo').val()!= 0 && $('#lugar').val()!= 0 && $('#asistencia').val()!= 0 && $('#entrada').val()!= 0 && $('#salida').val()!= 0) {
        console.log('yes');
        $('#formbtn').prop('disabled',false);
      }
      else {
        $('#formbtn').prop('disabled',true);
      }
  });
  $('input[type=date],input[type=select]').change(function() {
      if($('#evento').val()!= 0 && $('#tipo').val()!= 0 && $('#lugar').val()!= 0 && $('#asistencia').val()!= 0 && $('#entrada').val()!= 0 && $('#salida').val()!= 0) {
        console.log('yes');
        $('#formbtn').prop('disabled',false);
      }
      else {
        $('#formbtn').prop('disabled',true);
      }
  });
});