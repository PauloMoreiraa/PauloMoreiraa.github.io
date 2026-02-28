const html = document.documentElement

const themeBtn = document.getElementById("themeToggle")
const themeMobile = document.getElementById("themeToggleMobile")
const menuBtn = document.getElementById("menuToggle")
const nav = document.getElementById("navLinks")

function updateIcons(){

const iconName =
html.getAttribute("data-theme")==="dark"
? "sun"
: "moon"

document
.querySelectorAll("#themeToggle i, #themeToggleMobile i")
.forEach(icon=>{
icon.setAttribute("data-lucide",iconName)
})

lucide.createIcons()

}

function toggleTheme(){

const isDark = html.getAttribute("data-theme")==="dark"

if(isDark){
html.removeAttribute("data-theme")
localStorage.setItem("theme","light")
}else{
html.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
}

updateIcons()

}

themeBtn.addEventListener("click",toggleTheme)
themeMobile.addEventListener("click",toggleTheme)

menuBtn.addEventListener("click",()=>{

menuBtn.classList.toggle("active")
nav.classList.toggle("active")

})

const savedTheme = localStorage.getItem("theme")

if(savedTheme==="dark"){
html.setAttribute("data-theme","dark")
}

updateIcons()
lucide.createIcons()