const openContainer = document.querySelector(".open");
const thanksContainer =document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const checking = document.querySelectorAll(".number");

submitButton.addEventListener("click", () =>{
	thanksContainer.classList.remove("hide");
	openContainer.style.display = "none";
})

rateAgain.addEventListener("click", () =>{
	thanksContainer.classList.add("hide");
	openContainer.style.display = "block";
})

checking.forEach((check) => {
	check.addEventListener("click", () => {
		rating.innerHTML = check.innerHTML
	})
})