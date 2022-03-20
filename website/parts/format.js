var formatEl = document.createElement("div")

function format(m){
  formatEl.innerHTML = m

  prismHilite(formatEl)
  var r = formatEl.getElementsByTagName("image-recipe")
  for(var i=0; i<r.length; i++){
    var a = r[i].innerHTML.split("\n")
    a.pop(); a.shift() //remove first and last
    r[i].innerHTML = a.map(v => v ? `<img src="https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.18.1/assets/minecraft/textures/${v}.png">` : "<div></div>").join("")
  }
  r = formatEl.getElementsByTagName("font")
  for(var i=0; i<r.length; i++){
    var font = r[i].getAttribute("font")
    if(font){
      r[i].style.fontFamily = font
    }
  }
  
  m = formatEl.innerHTML
  //m = m.replace(/ /g, "&nbsp;")
  //m = m.replace(/\n/g, "<br>"
  m = m.replace(/@([^ \n]*)/g, "<a href='user.html?user=$1'>@$1</a>")
  m = m.replace(
    /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal|io))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
    , "<a href='$1'>$1</a>")

  return m
}
function prismHilite(el){
  var pres = el.getElementsByTagName("pre")
  for(var i=0; i<pres.length; i++){
    var pre = pres[i]
    var lang = pre.getAttribute("codeType")
    var notcode = pre.getAttribute("notcode")
    if(!lang) lang = "javascript"
    if(Prism.languages[lang] && notcode === null){
      pre.innerHTML = Prism.highlight(pre.innerHTML, Prism.languages[lang], lang).replace(/\./g,"&period;")
    }
  }
}

var prismVersion = "1.24.1"

var script = document.createElement("script")
script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/"+prismVersion+"/prism.min.js"
document.body.appendChild(script)

var prismTheme = localStorage.getItem("theme") === "dark" ? "prism-dark" : "prism"
var link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/"+prismVersion+"/themes/"+prismTheme+".min.css"
document.head.appendChild(link)

var style = document.createElement('style')
style.innerHTML = `
.format pre{
  padding:10px;
  background:#f8f4f4;
  color:black;
  white-space:pre-wrap;
}
.format pre[inline]{
  display: inline-block;
  padding: 0 2px;
  margin: 0;
}
body[theme=dark] .format pre{
  color:white;
  background:black;
}

.format img, .format video{
  max-width:100%;
}

mc-recipe, image-recipe{
  display: flex;
  flex-wrap: wrap;
  width:144px;
  image-rendering:pixelated;
  outline:2px solid black;
}
mc-recipe > *, image-recipe > *{
  width:48px;
  height:48px;
  outline:1px solid black;
}

@font-face{
  font-family:mojangles;
  src:url('https://minekhan.thingmaker.repl.co/mojangles.ttf');
}
`
document.head.appendChild(style)