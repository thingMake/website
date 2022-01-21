function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loggedIn(){
  return fetch("https://server.thingmaker.repl.co/account", {
    credentials: 'include',
  })
}
function findUnread(n){
  var a = 0
  for(var i=0; i<n.length; i++){
    if(!n[i].read) a++
  }
  if(a > 0) return a
}
function addBanner(text, color = "white"){
  var div = document.createElement("div")
  div.style.padding = "10px"
  div.style.background = color
  div.style.borderBottom = "1px solid black"
  div.style.boxShadow = "0px 0px 15px 3px black"
  div.innerHTML = text
  document.body.prepend(div)
}

var el = document.getElementById("loggedIn")
var notifs = document.getElementById("notifs")
notifs.style.display = "none"
loggedIn().then(data => {
  data.json().then(r => {
    var logged = typeof r === "object" ? r.username : null
    if(el && logged){
      var usernameEl = document.querySelector("#usernameDropdown .dropdown-name")
      if(usernameEl){
        el.style.display = "none"
        document.getElementById("usernameDropdown").style.display = "block"
        usernameEl.innerHTML = logged
        usernameEl.href = "/website/account.html"
        document.querySelector("#usernameDropdown-profile").href="/website/user.html?user="+escape(logged)
      }else{
        el.innerHTML = logged
        el.href = "/website/account.html"
      }
      notifs.style.display = ""
      if(r.notifs){
        var amount = findUnread(r.notifs)
        notifs.innerHTML += amount ? (" ("+amount+")") : ""
      }
      if(r.admin){
        document.querySelector("#adminNav").innerHTML = `
<a href="/website/admin/users.html">Users</a>
<a href="/website/admin/log.html">Log</a>
`
      }
    }
  })
}).catch(function(e){
  console.log(e)
  addBanner("Something went wrong when fetching","var(--red)")
})
/*
var logged = getCookie("username")
if(logged){
  el.innerHTML = logged
}*/

var script = document.createElement("script")
script.src = "https://server.thingmaker.repl.co/common.js"
document.body.appendChild(script)