const tl = gsap.timeline({ defaults: { ease: "power.out" } });
//const navbar = document.querySelector(".navbar");
tl.to(".navbar", { y: "100%", duration: 1, stagger: 0.25 });
