const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
	navMenu.style.display =
		navMenu.style.display === "flex" ? "none" : "flex";
});
