window.onload = function() {
  var lastRun = localStorage.getItem("last_Run_Time");  
  var now = Date.now();
  console.log('lastRun: ', lastRun);

  localStorage.setItem("last_Run_Time", now);

  $(function(e){
    var loader = document.getElementById("loader");
    $("div.loader").toggleClass('disabled');
  })




}
