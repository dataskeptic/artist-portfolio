gsap.registerPlugin(ScrollTrigger); 

// Hamburguer icon
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");  
});

// Logo animation
const twen = gsap.timeline({defaults: {ease:'bounce'}});
    twen.from(".log1", {duration: 2, opacity: 0, y: -400})
        .from(".log2", {duration: 2, opacity: 0, y: -500}, "-=1.8")
        .from(".log3", {duration: 2, opacity: 0, y: -300}, "-=1.5")
        .from("nav", {duration: 2, opacity: 0, y: -200, ease:'expo'}, "-=1");


// Galery animation
gsap.defaults({ease: "none", duration: 2});
const tl = gsap.timeline();

tl.addLabel("start")
    .from(".box2", {xPercent: 100})
    .addLabel("snap1")
    .from(".box3", {yPercent: 100})
    .addLabel("snap2")
    .from(".box4", {yPercent: -100})
    .addLabel("snap3")
    .from(".box5", {xPercent: 100})
    .addLabel("snap4")
    .from(".box6", {yPercent: 100})
    .addLabel("snap5")

ScrollTrigger.create({
    animation: tl, 
    trigger: "#section",
    start: "top top", 
    end: "+=6500", 
    scrub: true, 
    pin: true, 
    anticipatePin:  1, 
    snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 0.5}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "sine" // the ease of the snap animation ("power3" by default)
      }
});
