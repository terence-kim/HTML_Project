/**
 * 
 */
$(function(){
   $('#searchbtn').click(function(){
      alert($('#search').val()+"두레앙");
      event.preventDefault();
      if($('#search').val() == '두레앙'){
      location.href="../highshop.html";
      }
   });
});
