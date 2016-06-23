$(document).ready(function(){
	// $("canvas").css("background-color", "green");
	$(".rating-1 canvas:nth-child(n+10)").css("background-color", "#999");
	$(".rating-2 canvas:nth-child(n+10)").css("background-color", "#999");
	$(".rating-3 canvas:nth-child(n+9)").css("background-color", "#999");
	$(".rating-4 canvas:nth-child(n+9)").css("background-color", "#999");
	$(".rating-5 canvas:nth-child(n+8)").css("background-color", "#999");
	$(".rating-6 canvas:nth-child(n+7)").css("background-color", "#999");
	$(".rating-7 canvas:nth-child(n+7)").css("background-color", "#999");
	$(".rating-8 canvas:nth-child(n+6)").css("background-color", "#999");
  
    // Add smooth scrolling to all links in navbar
  $(".navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
