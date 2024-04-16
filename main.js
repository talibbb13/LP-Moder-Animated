tl = gsap.timeline()

tl.from("#left img, #center h1, #right h1, #right i", {
  y: -80,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5
})

tl.from("#home-left h1", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5
})

tl.from("#home-right img", {
  opacity: 0,
  duration: 1,
  scale: 0
})

gsap.from("#boxes .box", {
  scale: 0,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#boxes .box",
    scroller: "body",
    markers: true,
    start: "top 90%"
  }
})