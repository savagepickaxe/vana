gsap.registerPlugin(ScrollTrigger);



let kk = gsap.matchMedia();
kk.add("(min-width: 1000px)", () => {
  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
  
      body.classList.remove("scroll-up");
      text-wrapper.classList.add("hidin")
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
  });
const modal = document.querySelector('.overlay');

setTimeout(function(){
  modal.classList.add("show-modal");
},7000);

document.querySelector("#close-modal-btn").addEventListener("click", () =>{
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
})

