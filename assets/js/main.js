$(function() {
  // Main slider 
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
  // Grid info slider
  $(".infoSlides").responsiveSlides({
    auto: true,             
    speed: 300,            
    timeout: 4000,          
    pager: true,           
    nav: false,        
    pauseControls: true,       
    namespace: "centered-btns"   
  });
  // Form wizard handeler
  $('#myWizard').easyWizard();
});

jQuery(document).ready(function($) {
  // Function to enable next button
  // if inputs are filled
  $('#formbtn').prop('disabled',true);
  // Get inputs of form
  $('input[type=text],input[type=password]').keyup(function() {
    // Validate if inputs are filled
    if($('#evento').val()!= 0 && $('#tipo').val()!= 0 && $('#lugar').val()!= 0 && $('#asistencia').val()!= 0 && $('#entrada').val()!= 0 && $('#salida').val()!= 0) {
      console.log('yes');
      // Enable 'next' button
      $('#formbtn').prop('disabled',false);
    }
    else {
      // If some input is empty
      // button 'next' is disabled
      $('#formbtn').prop('disabled',true);
    }
  });
  // Function to validate dates and select
  $('input[type=date],select').change(function() {
    if($('#evento').val()!= 0 && $('#tipo').val()!= 0 && $('#lugar').val()!= 0 && $('#asistencia').val()!= 0 && $('#entrada').val()!= 0 && $('#salida').val()!= 0) {
      console.log('yes');
      $('#formbtn').prop('disabled',false);
    }
    else {
      $('#formbtn').prop('disabled',true);
    }
  });
  $('#formbtn').click(function(){
    $(this).prop('disabled',true);
  });
  $('.submit').click(function(){
    sending();
  });
});


// When button submit es clicker
// Launch sweet alert message to thank user
function sending(){
  swal({
    title: 'Información enviada!',
    text: 'Pronto nos pondremos en contacto!',
    type: 'success',
    timer: 5000,
    onOpen: () => {
      swal.showLoading()
    }
  }).then((result) => {
    if (result.dismiss === 'timer') {
      location.reload();
    }
  })
};
