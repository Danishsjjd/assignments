let header = document.getElementById("header"),
	btnPrimary = Array.from(document.getElementsByClassName("btn_primary")),
	toggler = document.getElementById("toggler"),
	navigation = document.getElementById("navigationOk");
window.addEventListener("scroll", (e) => {
	scrollY > 0
		? header.classList.add("bg_white")
		: header.classList.remove("bg_white");
});

inputForm.addEventListener('submit', (e)=>{
	e.preventDefault()
})

document.addEventListener("click", (e)=>{
	if(e.target.id != "toggler" && e.target.id != "navigation"){
		toggler.classList.remove("active")
		navigation.classList.remove("active")
		header.classList.remove("active")
	}
})

function toggleClass(e){
	toggler.classList.toggle("active")
	navigation.classList.toggle("active")
	header.classList.toggle("active")
}

btnPrimary.forEach((btn) => {
	btn.addEventListener('mousedown', (e)=>{
		const x = e.pageX - e.target.offsetLeft;
		const y = e.pageY - e.target.offsetTop;
		let span = document.createElement("span");
		span.classList.add("big_circle");
		span.style.left = x + "px";
		span.style.top = y + "px";
		span.style.transition = ".8s";
		requestAnimationFrame(function () {
			span.style.width = "400px";
			span.style.height = "400px";
			span.style.opacity = ".2";
		});
		btn.classList.add("shadow_bottom");
		btn.append(span);
		
		btn.addEventListener("mouseup", (e) => {
			btn.classList.remove("shadow_bottom");
			span.style.transition = ".2s";
			span.style.opacity = "0";
			span.addEventListener("transitionend", () => {
				span.remove();
			});
			btn.innerText.includes("OUR MENU")
				? window.scrollTo(0, menu.offsetTop)
				: console.log("have not");
		});
		btn.addEventListener("mouseleave", (e) => {
			btn.classList.remove("shadow_bottom");
			span.style.transition = ".2s";
			span.style.opacity = "0";
			span.addEventListener("transitionend", () => {
				span.remove();
			});
		});
	});
});
