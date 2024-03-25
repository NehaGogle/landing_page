var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr_blur.style.left = dets.x -200 + "px";
    crsr_blur.style.top = dets.y -200+ "px";
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:true
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
});
gsap.registerPlugin(ScrollTrigger);

var innerBoxes = document.querySelectorAll(".fh5co-type");

function animateBoxes(index) {
  if (index >= innerBoxes.length) {
    return;
  }

  setTimeout(function() {
    innerBoxes[index].classList.add("animate");
    animateBoxes(index + 1);
  }, 300);
}

gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top center", // Adjust this as per your needs
    end: "bottom center", // Adjust this as per your needs
    onEnter: function() {
      animateBoxes(0);
    },
    onLeaveBack: function() {
      // Reset animation on leave back
      innerBoxes.forEach(function(box) {
        box.classList.remove("animate");
      });
    },
    repeat: -1, // Infinite repeat
  },
});
