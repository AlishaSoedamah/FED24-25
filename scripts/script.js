// bron: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const themeSwitch = document.getElementById('theme-switch');
let darkmode = localStorage.getItem('darkmode');

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

//bron TheSupermazter: https://codepen.io/TheSupermazter/pen/ogvNvwJ
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

//bron: https://www.youtube.com/watch?v=_gKEUYarehE&ab_channel=Coding2GO
const enableDarkmode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
	darkmode = localStorage.getItem('darkmode');
	if (darkmode != "active") {
		enableDarkmode();
	}
	else {
		disableDarkmode();
	}
})