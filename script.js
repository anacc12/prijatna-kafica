const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Ukoliko vidis ovaj tekst znaj da ce te sreca od danas pratiti. Mudrosti koje leze u njemu oplemenjuju dusu, otvaraju nove vidike, a samim tim donose i mnogo srece. Posalji u 5 poruka svojim najblizim osobama i znaj da si uspeo u najboljim namerama, a sebi doneo srecu.";
  gif.src = "https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/GlbFPRyih6/original";
  question.style.fontSize = "1.5em";
  yesBtn.textContent = "Volim Anu <3";
  noBtn.style.display = "none";

  yesBtn.addEventListener("click", () => {
    alert("I ona tebe ❤️ Entering sexs mode...");
  });
});

// Function to move the No button to a random position within the viewport
function moveNoButton() {
  console.log(window.innerHeight)
  const viewportWidth = window.innerWidth - 700;
  const viewportHeight = window.innerHeight - 700;
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate the available space, accounting for button size to ensure it stays within bounds
  const maxX = viewportWidth - noBtnRect.width;
  const maxY = viewportHeight - noBtnRect.height;

  // Generate random positions that keep the button fully within the viewport
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Apply the new random position within the viewport
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Move the No button on hover
noBtn.addEventListener("mouseover", moveNoButton);

// Move the No button on click
noBtn.addEventListener("click", moveNoButton);
