/* for image slideshow */
const SLIDES = $(".slide");

function nextSlide() {
    let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
    if (nextNum > SLIDES.length) {
      nextNum = 1;
    }
    showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1;
  /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
    let index = num - 1;
    let currentSlide = SLIDES.eq(index);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
}

$("#next-button").click(function() {
    console.log(SLIDES);
    nextSlide();
});

$("#prev-button").click(function() {
    console.log(SLIDES);
    prevSlide();
});


var ex= $(".ex");
var ham= $(".ham");
var but= $(".but");

ex.hide();
ham.hide();
	but.click(function() {
		ham.slideToggle(function(){
		but.hide();
		ex.show();
		});
	});

	ex.click(function() {
		ham.slideToggle(function(){
		ex.hide();
		but.show();
		});
	});
