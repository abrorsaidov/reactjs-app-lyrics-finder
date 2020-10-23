const tl = gsap.timeline({ defaults: { ease: "power.out" } });
//const navbar = document.querySelector(".navbar");
tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 2 });
