// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  });
});

// Fade-in cards
const cards = document.querySelectorAll('.card');
cards.forEach(card=>{
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
});

window.addEventListener('scroll', ()=>{
  cards.forEach(card=>{
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "0.5s";
    }
  });
});