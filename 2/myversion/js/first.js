let darkmode = localStorage.getItem('darkmode');
const enable = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "enable")
}
const disable = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}
if (darkmode === "enable") {
    enable()
}
btn.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    if (darkmode !== "enable") {
        enable()
    }
    else {
        disable()
    }
})