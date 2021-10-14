var globTheme
function updateTheme(theme){
  theme = theme || localStorage.getItem("theme")
  document.body.setAttribute("theme", theme)
  document.body.setAttribute("theme2", "")
  if(theme === "glow"){
    document.body.setAttribute("theme", "dark")
    document.body.setAttribute("theme2", "glow")
  }
  globTheme = theme
}
updateTheme()