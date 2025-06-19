
        // GSAP animation for the logo
       document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#k", {
        y: 100,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
        onComplete: () => {
            gsap.to(".letters", {
                opacity: 1,
                x: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }
    });
});
document.querySelector(".glass-interactive").addEventListener("mousemove", (e) => {
    gsap.to(".glass-interactive", {
        x: e.clientX / 20,
        y: e.clientY / 20,
        duration: 0.3
    });
});
gsap.to(".skill-box", {
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "bounce.out",
  duration: 0.8
});


/*const el = document.getElementsByClassName("typewriter-text");
const phrases = [
  "Hello, my name is Kanak Dhiman",
  "I design sleek, animated websites",
  "Let’s create something extraordinary"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function loopTypewriter() {
  let currentPhrase = phrases[phraseIndex];
  let currentText = currentPhrase.substring(0, letterIndex);

  el.textContent = currentText;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(loopTypewriter, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(loopTypewriter, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(loopTypewriter, 1000);
  }
}

loopTypewriter();
console.log("Typewriter effect initialized")*/
