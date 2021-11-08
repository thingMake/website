var navbar = document.createElement("div");
navbar.setAttribute("class", "navbar");

navbar.innerHTML=`
  <a class="logo" href="/website/website.html">My website</a>
  <input placeholder="search">

  <a href="/website/website.html">Home</a>
  <a href="/website/posts.html" nav="posts">Posts</a>
  <a href="https://Minekhan.thingmaker.repl.co">MineKhan</a>
  <div id="adminNav"></div>

  <a class="right" id="loggedIn" href="/website/login.html">Log in</a>
  <div class="dropdown" id="usernameDropdown" style="display:none; float:right;">
    <a class="dropdown-name"></a>
    <div class="dropdown-content">
      <a href="/website/account.html">Account</a>
      <a id="usernameDropdown-profile">Profile</a>
    </div>
  </div>
  <a class="right" id="notifs" href="/website/notifs.html">Notifications</a>
`
document.body.appendChild(navbar)

var script = document.createElement("script")
script.src = "/website/parts/loggedIn.js"
navbar.appendChild(script)

//add footer
var script = document.createElement("script")
script.src = "/website/parts/footer.js"
document.body.appendChild(script)

//theme
var script = document.createElement("script")
script.src = "/website/parts/theme.js"
document.body.appendChild(script)

var style=document.createElement("style")
style.innerHTML = `
.navbar{
  overflow:hidden;
  background:var(--black);
  height:47px;
}
body[theme=dark] .navbar{
  background:#444;
}
.navbar a{
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  cursor:pointer;
}
body[theme=dark] .navbar a{
  color:white;
}
/* Right-aligned link */
.navbar .right {
  float: right;
}
.navbar .logo{
  background:var(--theme);
}
.navbar input{
  padding: 6px 10px;
  margin:8px 20px;
  float:left;
}
/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
body[theme=dark] .navbar a:hover{
  background:#111;
}
.navbar .dropdown{
  display:inline-block;
  background:inherit;
}
.navbar .dropdown > a{
  display:block;
}
.navbar .dropdown .dropdown-name{
  
}
.navbar .dropdown .dropdown-content{
  display:none;
  position:absolute;
  z-index:1;
  background:inherit;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.navbar .dropdown .dropdown-content a{
  display:block;
  width:100%;
}
.navbar .dropdown:hover .dropdown-content{
  display:block;
}
`
document.head.appendChild(style)