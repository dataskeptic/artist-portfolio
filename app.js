gsap.registerPlugin(ScrollTrigger); 

// Galery animation
gsap.defaults({ease: "none", duration: 2});
const tl = gsap.timeline();

tl.addLabel("start")
    .from(".box1", {scale: 2.5})
    .addLabel("snap0")
    .to(".box1", {opacity: 0, duration: 0.5})
    .fromTo(".box2", {yPercent: -150, scale: 2}, {yPercent: 0, scale: 1})
    .addLabel("snap1")
    .from(".box3", {xPercent: 100})
    .addLabel("snap2")
    .to(".box1", {opacity: 0, duration: 0.1})
    .to(".box2", {opacity: 0, duration: 0.1})
    .to(".box3", {opacity: 0, duration: 0.5})
    .fromTo(".box4", {opacity: 0, scale: 1}, {opacity: 1, scale: 2})
    .addLabel("snap3")
    .to(".box4", {opacity: 0})
    .from(".box5", {yPercent: 100})
    .addLabel("snap5")
    .from(".box6", {xPercent: -100})
    .addLabel("snap6")
    .from(".box7", {yPercent: 100})
    .addLabel("snap7")
    .to(".box4", {opacity: 0, duration: 0.1})
    .to(".box5", {opacity: 0, duration: 0.1})
    .to(".box6", {opacity: 0, duration: 0.1})
    .to(".box7", {opacity: 0, duration: 0.5})
    .fromTo(".box8", {opacity: 0}, {opacity:1})
    .addLabel("snap7")
    .to(".box8", {scale: 2})
    .addLabel("snap9")

ScrollTrigger.create({
    animation: tl, 
    trigger: "#section",
    start: "top top", 
    end: "+=10000", 
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
