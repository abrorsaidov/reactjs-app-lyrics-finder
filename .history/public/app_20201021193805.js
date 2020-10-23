const tl = gsap.timeline({ defaults: { ease: "power.out" } });
//const navbar = document.querySelector(".navbar");
tl.to(".navbar", { backgroundColor: "blue", duration: 1, stagger: 0.25 });
