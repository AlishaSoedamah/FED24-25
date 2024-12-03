document.addEventListener("DOMContentLoaded", () => {
	const targets = document.querySelectorAll("section");
  
	const observer = new IntersectionObserver(
	  (entries, observer) => {
		entries.forEach((entry) => {
		  if (entry.isIntersecting) {
			entry.target.classList.add("visible");
			observer.unobserve(entry.target);
		  }
		});
	  },
	  {
		threshold: 0.1
	  }
	);
	targets.forEach((target) => observer.observe(target));
  });
  

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
