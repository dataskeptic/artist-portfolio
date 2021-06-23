gsap.registerPlugin(ScrollTrigger); 

// Galery animation
gsap.defaults({ease: "none", duration: 2});
const tl = gsap.timeline();

tl.addLabel("start")
    .from(".box1", {scale: 2.5})
    .addLabel("snap0")
    .to(".box1", {yPercent: 100, opacity: 0}, "+=0.5")
    .fromTo(".box2", {yPercent: -150, scale: 1.8}, {yPercent: 0, scale: 1}, "-=1")
    .fromTo(".h1", {xPercent: 200, yPercent: 500, scale: 0, opacity: 0}, {opacity: 1, xPercent: -10,yPercent: 0, scale: 1}, "-=2.5")
    .fromTo(".h2", {xPercent: -200,yPercent: 500, scale: 0, opacity: 0}, {opacity: 1, xPercent: 0,yPercent: 0, scale: 1}, "-=2.5")
    .addLabel("snap1")
    .to(".h1, .h2", {opacity: 0, yPercent: 50})
    .to(".box2", {yPercent: 100, opacity: 0}, "-=0.5")
    .fromTo(".h3", {yPercent: -150, opacity: 0}, {yPercent: -100, opacity: 1}, "-=2")
    .to(".h3", {yPercent: 0})
    .addLabel("snapi")
    .from(".box3", {yPercent: 100}, "-=2")
    .addLabel("snap2")
    .to(".h3", {opacity: 0})
    .to(".box3", {opacity: 0, duration: 0.5})
    .fromTo(".box4", {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, duration: 2}, "-=0.4")
    .addLabel("snap3")
    .to(".box4", {scale: 2})
    .addLabel("snaplap")
    .to(".box4", {opacity: 0})
    .from(".box5", {yPercent: 100}, "-=0.5")
    .fromTo(".h4", { opacity: 0, yPercent: 50}, { opacity: 1, yPercent: 0})
    .addLabel("snap5")
    .to(".box5", {yPercent: -100, opacity: 0})
    .from(".box6", {xPercent: -110}, "-=1")
    .fromTo(".h5", {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
    .addLabel("snap6")
    .to(".box6", {opacity: 0})
    .from(".box7", {yPercent: 100}, "-=2")
    .addLabel("snappe")
    .to(".box7", {opacity: 0, duration: 0.5})
    .fromTo(".box8", {opacity: 0}, {opacity:1})
    .addLabel("snappa")
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
// font-family: 'Major Mono Display', monospace;