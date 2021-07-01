function format(m, id){
  //m = m.replace(/ /g, "&nbsp;")
  //m = m.replace(/\n/g, "<br>"
  m = m.replace(/@([A-Za-z0-9]*)/g, "<a href='user.html?user=$1'>@$1</a>")
  m = m.replace(/(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi, "<a href='$1'>$1</a>")

  setTimeout(function(){
    var c = document.getElementById(id)
    if(c) prismHilite(c)
  }, 10)

  return m
}
function prismHilite(el){
  var pres = el.getElementsByTagName("pre")
  for(var i=0; i<pres.length; i++){
    var pre = pres[i]
    pre.innerHTML = Prism.highlight(pre.textContent, Prism.languages.javascript, 'javascript');
  }
}

var script = document.createElement("script")
script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"
document.body.appendChild(script)

var link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
document.head.appendChild(link)

var style = document.createElement('style')
style.innerHTML = `
.format pre{
  padding:10px;
  background:#f8f4f4;
}
.format img, .format video{
  max-width:100%;
}

mc-recipe{
  display: flex;
  flex-wrap: wrap;
  width:90px;
  image-rendering:pixelated;
}
mc-recipe > *{
  width:30px;
  height:30px;
  outline:1px solid black;
}`
document.head.appendChild(style)