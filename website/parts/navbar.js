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
  <a class="right" id="notifs" href="/website/notifs.html">Notifications</a>
`
var script = document.createElement("script")
script.src = "/website/parts/loggedIn.js"
navbar.appendChild(script)

//add footer
var script = document.createElement("script")
script.src = "/website/parts/footer.js"
document.body.appendChild(script)

document.body.appendChild(navbar)

var style=document.createElement("style")
style.innerHTML = `
  .navbar{
    overflow:hidden;
    background:#333;
    height:47px;
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
  /* Right-aligned link */
  .navbar .right {
    float: right;
  }
  .navbar .logo{
    background:#1abc9c;
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
`
document.head.appendChild(style)