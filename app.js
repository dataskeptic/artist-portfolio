gsap.registerPlugin(ScrollTrigger); 


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

let width = window.innerWidth;
width = (width/2) - 100;
console.log(width);

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");  
});

const twen = gsap.timeline({defaults: {ease:'bounce'}});
    twen.from(".log1", {duration: 2, opacity: 0, y: -400})
        .from(".log2", {duration: 2, opacity: 0, y: -500}, "-=1.8")
        .from(".log3", {duration: 2, opacity: 0, y: -300}, "-=1.5")
        .from("nav", {duration: 2, opacity: 0, y: -200, ease:'expo'}, "-=1");

let logo = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger:".home",
        pin: true,   // pin the trigger element while active
        start: "center center", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
});

logo.to(".logo", {duration:1, x: -width, scale: 0.3, y: -100, ease:"sine"},"+=4");


gsap.defaults({ease: "none", duration: 2});
const tl = gsap.timeline();

tl.addLabel("start")
    .from(".box1", {xPercent: 100})
    .addLabel("color")
    .from(".box2", {yPercent: 100})
    .addLabel("spin")
    .from(".box3", {xPercent: -100})
    .addLabel("end");

ScrollTrigger.create({
    animation: tl, 
    trigger: "#section",
    start: "top top", 
    end: "+=4000", 
    scrub: true, 
    pin: true, 
    anticipatePin:  1, 
    snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "sine" // the ease of the snap animation ("power3" by default)
      }
});

const galeria = document.getElementById("galeria");
    galeria.addEventListener("click", () => {
        document.querySelector(".foot").scrollIntoView({ 
            behavior: 'smooth'
          });
    });