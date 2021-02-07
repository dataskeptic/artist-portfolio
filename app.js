gsap.registerPlugin(ScrollTrigger); 


const twen = gsap.timeline({defaults: {ease:'bounce'}});
    twen.from(".logo", {duration: 2, opacity: 0, y: -200});


gsap.defaults({ease: "none", duration: 2});
const tl = gsap.timeline();

tl.addLabel("start")
    .from(".box1", {xPercent: -100})
    .addLabel("color")
    .from(".box2", {yPercent: -100})
    .addLabel("spin")
    .from(".box3", {xPercent: -100})
    .addLabel("end");

ScrollTrigger.create({
    animation: tl, 
    trigger: ".section",
    start: "top top", 
    end: "+=4000", 
    scrub: true, 
    pin: true, 
    anticipatePin:  1, 
    snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "sine" // the ease of the snap animation ("power3" by default)
      }
});