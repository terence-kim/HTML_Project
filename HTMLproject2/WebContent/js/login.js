
$(document).ready(function() {             
$('#loginModal').modal('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});

$(function(){
$('#signin').click(function(){
		$('#id').val("");
		$('#password').val("");
		location.href = href="index.html";
  });
});